#!/bin/bash
cd "$(dirname "$0")"

# Remove stale git lock files if present
rm -f .git/index.lock .git/HEAD.lock

# Stage all changes
git add -A

# Commit everything pending
git commit -m "Update Hot Deals copy, fix 404 routing, add privacy text"

# Push to trigger Netlify deploy
git push origin main

echo ""
echo "✅ Done! Netlify will deploy in ~1 minute."
echo "Press any key to close..."
read -n 1
