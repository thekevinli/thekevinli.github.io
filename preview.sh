#!/bin/sh
# Build, then serve dist/ at the root like GitHub Pages (needs Node).
cd "$(dirname "$0")" && npm run build && echo "Open http://localhost:8000/" && cd dist && python3 -m http.server 8000
