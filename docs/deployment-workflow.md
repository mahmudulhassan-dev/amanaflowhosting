# Deployment Workflow (GitFlow)

Our development strictly follows a Pull Request (PR) based GitFlow model to ensure absolute stability on the production server.

## Branch Strategy
- `main`: The default production-ready branch. Direct commits are blocked.
- `develop`: The active integration branch. Features merge here first.
- `feature/*`: For building new features (e.g., `feature/auth-ui`).
- `hotfix/*`: Urgent operational patches applied directly to production workflows.

## Deployment Lifecycle
1. Branch from `develop` -> `feature/your-feature`.
2. Push to GitHub to trigger a **Vercel Preview Deployment**.
3. Review preview URL and QA on your device.
4. Merge `feature` -> `develop` via Pull Request.
5. Release window (Scheduled): Merge `develop` -> `main`. Action triggers the **Live Production Build**.
