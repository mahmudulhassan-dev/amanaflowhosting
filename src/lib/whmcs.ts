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
    
    // First, check availability
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

    // Now, fetch real pricing for this TLD
    const pricing = await getRealTLDPricing(`.${tld}`);

    return [{
      domain: domain,
      available: data.status === 'available',
      price: pricing || getMockPrice(`.${tld}`),
      currency: 'BDT', // Primary currency as confirmed in WHMCS
      extension: `.${tld}`
    }];
  } catch (error) {
    console.error("WHMCS API Error:", error);
    return mockLookupDomain(domain);
  }
}

async function getRealTLDPricing(tld: string): Promise<number | null> {
  try {
    const params = new URLSearchParams();
    params.append('action', 'GetTLDPricing');
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
    if (data.result === 'success') {
      const extension = tld.startsWith('.') ? tld.substring(1) : tld;
      const tldPricing = data.pricing[extension];
      if (tldPricing) {
        // Return registration price (usually 'register' key in WHMCS JSON)
        // Note: structure can vary by currency. Returning first available.
        const currencyKey = Object.keys(tldPricing)[0];
        return parseFloat(tldPricing[currencyKey].register) || null;
      }
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Mock data generator for development
 */
function mockLookupDomain(domain: string): Promise<DomainLookupResult[]> {
  const [name] = domain.split('.');
  const commonExtensions = ['.com', '.net', '.org', '.io', '.co.bd', '.cloud'];
  
  return new Promise<DomainLookupResult[]>((resolve) => {
    setTimeout(() => {
      const results = commonExtensions.map((tld) => {
        const fullDomain = tld.startsWith('.') ? `${name}${tld}` : `${name}.${tld}`;
        const isTaken = (name === 'amanaflow' && tld === '.com') || Math.random() > 0.7;
        
        return {
          domain: fullDomain,
          available: !isTaken,
          price: getMockPrice(tld),
          currency: 'BDT',
          extension: tld
        };
      });
      resolve(results);
    }, 1500);
  });
}

function getMockPrice(tld: string): number {
  const prices: Record<string, number> = {
    '.com': 1250,
    '.net': 1450,
    '.org': 1550,
    '.io': 4500,
    '.co.bd': 2500,
    '.cloud': 600
  };
  return prices[tld] || 1500.00;
}
