# Required Environment Variables

# GitHub Integration
GITHUB_TOKEN=ghp_xxxxxxxxxxxxxxxxxxxx
GITHUB_OWNER=kronosguy
GITHUB_REPO=ukg-wfm-academy
GITHUB_PROJECT_ID=PVT_kwHODIVJTc4BP2WJ

# Database
DATABASE_URL=postgresql://user:password@host:5432/academy

# Redis (Caching & Sessions)
REDIS_URL=redis://default:password@host:6379

# Authentication
NEXTAUTH_URL=https://kronosguy.com/academy
NEXTAUTH_SECRET=your-secret-key-here
GITHUB_CLIENT_ID=Iv1.xxxxxxxxxxxxxxxx
GITHUB_CLIENT_SECRET=your-client-secret

# Vercel Deployment
VERCEL_TOKEN=xxxxxxxxxxxxxxxxxxxx
VERCEL_ORG_ID=team_xxxxxxxxxxxxxxxx
VERCEL_PROJECT_ID=prj_xxxxxxxxxxxxxxxx

# Lab Environment
LAB_ORCHESTRATOR_URL=https://k8s-api.kronosguy.com
LAB_DOCKER_REGISTRY=registry.kronosguy.com
LAB_STORAGE_CLASS=fast-ssd

# Email (Notifications)
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your-sendgrid-api-key
FROM_EMAIL=academy@kronosguy.com

# Analytics
POSTHOG_API_KEY=phc_xxxxxxxxxxxxxxxxxxxx
POSTHOG_HOST=https://app.posthog.com

# Monitoring
SENTRY_DSN=https://xxxxx@xxxxx.ingest.sentry.io/xxxxx