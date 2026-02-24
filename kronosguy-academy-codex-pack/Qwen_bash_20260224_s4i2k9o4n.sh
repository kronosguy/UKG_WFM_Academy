# Clear cache
git clean -fd
rm -rf .next

# Force rebuild
git commit --allow-empty -m "Rebuild"
git push