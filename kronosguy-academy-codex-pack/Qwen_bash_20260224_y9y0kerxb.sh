# Clear build cache
rm -rf .next out dist

# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try build again
npm run build