# AmanaFlow Hosting Platform

Welcome to the central repository for the **AmanaFlow Hosting Company Platform**. This repository contains the Next.js 15 (App Router) frontend, designed to integrate seamlessly with our WHMCS backend.

## 📁 Repository Strategy & Audit

We operate a strict, professional Git workflow tailored for Vercel deployment and WHMCS integration.
- **Current Branch Status**: We use `main` for production and `development` for active staging/preview.
- **Vercel Previews**: Vercel automatically builds preview URLs for the `development` and `feature/*` branches.
- **Private Contribution Rules**: No pushing directly to `main`. Create feature branches (e.g., `feature/navigation-shell`) and submit PRs to `development`.

### Folder Structure
- `src/app/` -> Next.js Pages and API Routes.
- `src/components/ui/` -> Reusable core design system (Buttons, Cards).
- `src/components/shared/` -> Cross-page components (Navbar, Footer).
- `src/components/sections/` -> Large page sections (Hero, Pricing Grid).
- `src/config/` -> Static constants (Site SEO, Menus).
- `src/lib/` -> Utility functions and WHMCS API bridge.
- `docs/` -> Comprehensive planning, maps, and component logging.

## 🚀 Execution & Implementation Plan

### Phase E1: Core Brand Shell Finalization
- **Goal**: Establish the typography (`Plus Jakarta Sans`) and color tokens (Enterprise Cloud).
- **Files**: `src/app/globals.css`, `src/app/layout.tsx`.

### Phase E2: Navigation & Layout Shell
- **Goal**: Rebuild the app shell with a premium hosting feel.
- **Components**: Topbar, Sticky Navbar, Mega Menu, Mobile Drawer, Premium Footer.
- **Files**: `src/components/shared/*`.

### Phase E3: Homepage Final Shell
- **Goal**: Create the highly-converting hosting homepage.
- **Sections**: Hero, Domain Search Strip, Trust Strip, Hosting Categories, Pricing Teaser, Security Overview.
- **Files**: `src/app/page.tsx`, `src/components/sections/*`.

## 🌐 Vercel-Aware Workflow
Before merging any feature, ensure:
1. Local build succeeds (`npm run build`).
2. No sensitive WHMCS credentials exist in the frontend code.
3. Next.js image configurations match our trusted domains.
4. Preview URLs function without errors.

## 🛠 Installation & Local Dev
```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

---
*Created per AmanaFlow Master Plan Phase 1.*
