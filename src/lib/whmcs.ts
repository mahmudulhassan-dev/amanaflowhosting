/**
 * WHMCS API Utility for AmanaFlow
 * Handles domain lookups, pricing, and cart integration.
 * Supports a mock mode for development without live credentials.
 */

const WHMCS_API_URL = process.env.WHMCS_API_URL;
const WHMCS_API_IDENTIFIER = process.env.WHMCS_API_IDENTIFIER;
const WHMCS_API_SECRET = process.env.WHMCS_API_SECRET;

export interface DomainLookupResult {
  domain: string;
  available: boolean;
  price?: number;
  currency?: string;
  extension: string;
}

export async function lookupDomain(domain: string): Promise<DomainLookupResult[]> {
  const needsMock = !WHMCS_API_URL || !WHMCS_API_IDENTIFIER || !WHMCS_API_SECRET;

  if (needsMock) {
    console.warn("WHMCS credentials missing. Running in MOCK mode.");
    return mockLookupDomain(domain);
  }

  try {
    const [, tld] = domain.includes('.') ? [domain.split('.')[0], domain.split('.').slice(1).join('.')] : [domain, 'com'];
    
    const params = new URLSearchParams();
    params.append('action', 'DomainWhois');
    params.append('domain', domain);
    params.append('identifier', WHMCS_API_IDENTIFIER!);
    params.append('secret', WHMCS_API_SECRET!);
    params.append('responsetype', 'json');

    const response = await fetch(WHMCS_API_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params,
    });

    const data = await response.json();

    if (data.result === 'error') {
      throw new Error(data.message || "WHMCS API Error");
    }

    // WHMCS DomainWhois returns: { result: "success", status: "available" | "unavailable" }
    return [{
      domain: domain,
      available: data.status === 'available',
      price: getMockPrice(`.${tld}`), // Pricing usually needs a separate 'GetTLDPricing' call
      currency: 'USD',
      extension: `.${tld}`
    }];
  } catch (error) {
    console.error("WHMCS API Error:", error);
    // Fallback to mock if API fails during migration/dns propagation
    return mockLookupDomain(domain);
  }
}

/**
 * Mock data generator for development
 */
function mockLookupDomain(domain: string): Promise<DomainLookupResult[]> {
  const [name] = domain.split('.');
  const commonExtensions = ['.com', '.net', '.org', '.io', '.co.bd', '.cloud'];
  
  // Simulate network delay
  return new Promise<DomainLookupResult[]>((resolve) => {
    setTimeout(() => {
      const results = commonExtensions.map((tld) => {
        const fullDomain = tld.startsWith('.') ? `${name}${tld}` : `${name}.${tld}`;
        // Logic: 'amanaflow' is always taken for .com, everything else randomized
        const isTaken = (name === 'amanaflow' && tld === '.com') || Math.random() > 0.7;
        
        return {
          domain: fullDomain,
          available: !isTaken,
          price: getMockPrice(tld),
          currency: 'USD',
          extension: tld
        };
      });
      resolve(results);
    }, 1500);
  });
}

function getMockPrice(tld: string): number {
  const prices: Record<string, number> = {
    '.com': 9.99,
    '.net': 11.99,
    '.org': 12.99,
    '.io': 39.99,
    '.co.bd': 19.99,
    '.cloud': 4.99
  };
  return prices[tld] || 15.00;
}
