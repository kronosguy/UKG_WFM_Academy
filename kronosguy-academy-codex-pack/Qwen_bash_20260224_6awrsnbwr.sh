# Step 1: Verify Everything Is Here
cd /home/user/UKG_WFM_Academy
ls academy/content/                    # Content files
ls academy/components/layout/          # React components
ls academy/styles/                     # CSS modules
ls academy/.github/workflows/          # CI/CD

# Step 2: Install & Test Locally
cd academy
npm install
npm run dev
# Visit http://localhost:3000/academy

# Step 3: Verify Build Works
npm run type-check    # TypeScript check
npm run lint          # Linting
npm run build         # Full build

# Step 4: Deploy
git add .
git commit -m "Deploy KronosGuy Academy - Complete production-ready platform"
git push origin main

# GitHub Actions automatically:
# 1. Runs tests
# 2. Lints code
# 3. Builds site
# 4. Deploys to production

# Monitor at: https://github.com/kronosguy/academy/actions