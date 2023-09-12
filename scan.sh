echo "# Report" >./tmp/scanResults.md
echo "## Project Structure" >>./tmp/scanResults.md
echo "### ./apps" >>./tmp/scanResults.md
echo "\`\`\`shell" >>./tmp/scanResults.md
tree apps >>./tmp/scanResults.md
echo "\`\`\`" >>./tmp/scanResults.md
echo "### ./apps-globals" >>./tmp/scanResults.md
echo "\`\`\`shell" >>./tmp/scanResults.md
tree apps-globals >>./tmp/scanResults.md
echo "\`\`\`" >>./tmp/scanResults.md
echo "### ./apps-shared-libs" >>./tmp/scanResults.md
echo "\`\`\`shell" >>./tmp/scanResults.md
tree apps-shared-libs >>./tmp/scanResults.md
echo "\`\`\`" >>./tmp/scanResults.md
echo "## Routen" >>./tmp/scanResults.md
echo "\`\`\`shell" >>./tmp/scanResults.md
find . -type f -name '*-routing.module.ts' >>./tmp/scanResults.md
echo "\`\`\`" >>./tmp/scanResults.md
prettier --write tmp/scanResults.md
