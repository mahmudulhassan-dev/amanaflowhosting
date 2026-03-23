# Pre and Post Release QA Checklists

Standard operating procedures to eliminate regressions prior to updating the production branch payload.

## Pre-Merge Verification (Testing on Preview branch)
- [ ] Local build (`npm run build`) runs without any warnings.
- [ ] Vercel static analysis confirms zero strict TypeScript errors.
- [ ] Vercel Preview URL is online and accessible.
- [ ] Mobile navigation matrix remains unbroken globally.

## Post-Deploy Verification (Live on main branch)
- [ ] The primary URL `https://amanaflow.cloud` propagates successfully and enforces HTTPS.
- [ ] Browser developer tools (F12) show no 404 or 500 status codes in Network logs.
- [ ] Next-Intl Language toggles (`/en` to `/bn`) route cleanly with no localized bleeding.
- [ ] Canonical URLs in HTML `<head>` match production root (no Preview URLs leaked in tags).
