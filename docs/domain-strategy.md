# Domain & SEO Isolation Strategy

Stringent rules are applied at the CDN level to protect our domain authority and ensure flawless canonical indexation in Google Search.

## Canonical Routing
- **Primary Domain:** `amanaflow.cloud`
- **Redirect Policy:** The `www.amanaflow.cloud` alias is configured via Vercel to explicitly push a `308 Permanent Redirect` to the non-www origin domain.

## Environment Indexing Resolution
- The primary domain (`amanaflow.cloud`) is exclusively bound to the `main` branch deployments. It is fully visible to Google.
- Preview deployments (`feature/*` and `develop`) auto-generate dynamic `<branch>.vercel.app` subdomains.
- To prevent accidental indexing of test data, our codebase is environmentally aware. Running on a `vercel.app` domain natively forces `<meta name="robots" content="noindex" />`.
