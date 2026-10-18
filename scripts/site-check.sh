#!/usr/bin/env bash
#
# Checks that the live site is actually serving what is in main.
#
# Why this exists: in September 2026 a client site served a build from six
# weeks earlier and nobody noticed, because nobody was looking. A page that
# existed in main returned 404 on the live site for six weeks. This script
# looks for exactly that.
#
# How it works: it lists every page route in this repository, asks the live
# site for each one, and fails if any of them 404. A route that is in main but
# not on the live site means the deployment is behind main.
#
# Run it yourself any time:  bash scripts/site-check.sh
# Point it somewhere else:   BASE_URL=https://staging.example.com bash scripts/site-check.sh

set -uo pipefail

# Where to check. Set BASE_URL in the environment to override.
BASE_URL="${BASE_URL:-}"
if [ -z "$BASE_URL" ] && [ -f monitor/site.conf ]; then
  # shellcheck disable=SC1091
  . monitor/site.conf
fi

if [ -z "${BASE_URL:-}" ]; then
  echo "No BASE_URL set."
  echo "Put one in monitor/site.conf like this:"
  echo '  BASE_URL=https://www.example.com'
  echo "Skipping the check rather than failing, because an unset URL is a"
  echo "setup gap, not a broken site."
  exit 0
fi

BASE_URL="${BASE_URL%/}"

# Find the app directory. These projects use either app/ or src/app/.
APP_DIR=""
for d in app src/app; do
  [ -d "$d" ] && APP_DIR="$d" && break
done

if [ -z "$APP_DIR" ]; then
  echo "No app/ or src/app/ directory found. Nothing to check."
  exit 0
fi

echo "Site:   $BASE_URL"
echo "Routes: from $APP_DIR"
echo

# Turn page files into URL paths.
#   app/page.tsx                  -> /
#   app/contact/page.tsx          -> /contact
#   app/services/[slug]/page.tsx  -> skipped, needs a real slug
#   app/(marketing)/about/...     -> /about, route groups are not in the URL
ROUTES=$(
  find "$APP_DIR" -name 'page.tsx' -o -name 'page.ts' -o -name 'page.jsx' 2>/dev/null \
  | sed "s|^$APP_DIR||; s|/page\.[tj]sx\?$||" \
  | sed 's|/([^)]*)||g' \
  | grep -v '\[' \
  | sed 's|^$|/|' \
  | sort -u
)

if [ -z "$ROUTES" ]; then
  echo "No static routes found. Nothing to check."
  exit 0
fi

FAILED=0
CHECKED=0

while IFS= read -r route; do
  [ -z "$route" ] && route="/"
  url="${BASE_URL}${route}"
  code=$(curl -s -o /dev/null -w '%{http_code}' -L --max-time 30 "$url" 2>/dev/null)
  CHECKED=$((CHECKED + 1))
  if [ "$code" = "200" ]; then
    printf '  ok    %s\n' "$route"
  else
    printf '  FAIL  %s  (HTTP %s)\n' "$route" "$code"
    FAILED=$((FAILED + 1))
  fi
done <<< "$ROUTES"

echo
echo "Checked $CHECKED routes, $FAILED failed."

if [ "$FAILED" -gt 0 ]; then
  echo
  echo "A route that exists in this repository did not load on the live site."
  echo
  echo "The most likely cause is that the live site is serving an older build"
  echo "than main. Check when the hosting last deployed before you start"
  echo "debugging the code. This has happened before and the code was fine"
  echo "both times."
  echo
  echo "If the route was deliberately removed, delete its page file, or add it"
  echo "to the skip list at the top of this script."
  exit 1
fi

echo "Live site matches main."
