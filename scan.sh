#!/bin/zsh

# Schreiben Sie die Inhalte in die Datei
echo "# Report" >./tmp/scanResults.md
echo "## Project Structure" >>./tmp/scanResults.md
echo "### ./apps" >>./tmp/scanResults.md
echo "\n\`\`\`shell" >>./tmp/scanResults.md
tree apps >>./tmp/scanResults.md
echo "\`\`\`\n" >>./tmp/scanResults.md
echo "### ./apps-globals" >>./tmp/scanResults.md
echo "\n\`\`\`shell" >>./tmp/scanResults.md
tree apps-globals >>./tmp/scanResults.md
echo "\`\`\`\n" >>./tmp/scanResults.md
echo "### ./apps-shared-libs" >>./tmp/scanResults.md
echo "\n\`\`\`shell" >>./tmp/scanResults.md
tree apps-shared-libs >>./tmp/scanResults.md
echo "\`\`\`\n" >>./tmp/scanResults.md
echo "## Routen" >>./tmp/scanResults.md
echo "\n\`\`\`shell" >>./tmp/scanResults.md
find . -type f -name '*-routing.module.ts' >>./tmp/scanResults.md
echo "\`\`\`" >>./tmp/scanResults.md

# Check if ready
while [ ! -f ./tmp/scanResults.md ]; do
  sleep 1
done

prettier --write tmp/scanResults.md --config ./.prettierrc
markdownlint tmp/scanResults.md
