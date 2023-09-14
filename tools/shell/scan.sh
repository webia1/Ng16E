#!/bin/zsh

# Schreiben Sie die Inhalte in die Datei
echo "# Report" >./docs/GeneratedReport.md
echo "## Project Structure" >>./docs/GeneratedReport.md
echo "### ./apps" >>./docs/GeneratedReport.md
echo "\n\`\`\`shell" >>./docs/GeneratedReport.md
tree apps >>./docs/GeneratedReport.md
echo "\`\`\`\n" >>./docs/GeneratedReport.md
echo "### ./apps-globals" >>./docs/GeneratedReport.md
echo "\n\`\`\`shell" >>./docs/GeneratedReport.md
tree apps-globals >>./docs/GeneratedReport.md
echo "\`\`\`\n" >>./docs/GeneratedReport.md
echo "### ./apps-shared-libs" >>./docs/GeneratedReport.md
echo "\n\`\`\`shell" >>./docs/GeneratedReport.md
tree apps-shared-libs >>./docs/GeneratedReport.md
echo "\`\`\`\n" >>./docs/GeneratedReport.md
echo "## Routen" >>./docs/GeneratedReport.md
echo "\n\`\`\`shell" >>./docs/GeneratedReport.md
find . -type f -name '*-routing.module.ts' >>./docs/GeneratedReport.md
echo "\`\`\`" >>./docs/GeneratedReport.md

# Check if ready
while [ ! -f ./docs/GeneratedReport.md ]; do
  sleep 1
done

prettier --write docs/GeneratedReport.md --config ./.prettierrc
markdownlint docs/GeneratedReport.md
