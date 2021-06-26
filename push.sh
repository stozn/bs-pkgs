tree -J -o index.json
git add -A
git commit -m "update package repository"
git push origin main
git push mirror main
