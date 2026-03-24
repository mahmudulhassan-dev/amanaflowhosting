const WHMCS_API_URL = "https://clients.amanaflow.cloud/includes/api.php";
const WHMCS_API_IDENTIFIER = "WMMCt0tSqH1TTzMXzyh79A1Lmnj4CzQZ";
const WHMCS_API_SECRET = "DeTr1xKcSnS4UvM3FjV7NbQVEWvt9cWs";

async function testDomain(domain) {
    const params = new URLSearchParams();
    params.append('action', 'DomainWhois');
    params.append('domain', domain);
    params.append('identifier', WHMCS_API_IDENTIFIER);
    params.append('secret', WHMCS_API_SECRET);
    params.append('responsetype', 'json');

    console.log(`Testing ${domain}...`);
    try {
        const response = await fetch(WHMCS_API_URL, {
            method: 'POST',
            body: params
        });
        const data = await response.json();
        console.log(`Result for ${domain}:`, JSON.stringify(data, null, 2));
    } catch (e) {
        console.error(`Error testing ${domain}:`, e.message);
    }
}

async function run() {
    await testDomain('google.com');
    await testDomain('amanaflow.cloud');
    await testDomain('google.co.bd');
}

run();
