#!/usr/bin/env bash
set -euo pipefail

PROJECT_NAME="${1:-neuvago-site}"
DATE="$(date +%Y%m%d-%H%M)"
ROOT="$(pwd)"
STAGING_DIR="$ROOT/.review-export"
OUT_DIR="$ROOT/exports"
ZIP_NAME="${PROJECT_NAME}-review-${DATE}.zip"
ZIP_PATH="$OUT_DIR/$ZIP_NAME"

echo "Preparing clean export from:"
echo "$ROOT"
echo ""

command -v rsync >/dev/null 2>&1 || { echo "Missing rsync"; exit 1; }
command -v zip >/dev/null 2>&1 || { echo "Missing zip"; exit 1; }

rm -rf "$STAGING_DIR"
mkdir -p "$STAGING_DIR/$PROJECT_NAME" "$OUT_DIR"

rsync -a \
  --include='.env.example' \
  --include='.env.sample' \
  --exclude='.git/' \
  --exclude='node_modules/' \
  --exclude='.next/' \
  --exclude='out/' \
  --exclude='dist/' \
  --exclude='build/' \
  --exclude='.vercel/' \
  --exclude='.netlify/' \
  --exclude='.turbo/' \
  --exclude='.cache/' \
  --exclude='.parcel-cache/' \
  --exclude='coverage/' \
  --exclude='exports/' \
  --exclude='.review-export/' \
  --exclude='.DS_Store' \
  --exclude='*.log' \
  --exclude='.env' \
  --exclude='.env.*' \
  "$ROOT/" "$STAGING_DIR/$PROJECT_NAME/"

REPORT="$STAGING_DIR/$PROJECT_NAME/PROJECT_REVIEW_CONTEXT.md"

{
  echo "# Neuvago site review context"
  echo ""
  echo "Generated: $(date)"
  echo "Project root: $ROOT"
  echo ""
  echo "## Git branch"
  if command -v git >/dev/null 2>&1 && git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    git branch --show-current || true
  else
    echo "No git repository detected."
  fi

  echo ""
  echo "## Git status"
  if command -v git >/dev/null 2>&1 && git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    git status --short || true
  else
    echo "No git status available."
  fi

  echo ""
  echo "## Top-level files"
  find "$ROOT" -maxdepth 1 \
    -not -path "$ROOT" \
    -not -name ".git" \
    -not -name "node_modules" \
    -not -name ".next" \
    -not -name "exports" \
    -not -name ".review-export" \
    -print | sed "s|$ROOT/||" | sort

  echo ""
  echo "## Source structure"
  for dir in app pages src components lib utils styles public assets content data shopify; do
    if [ -d "$ROOT/$dir" ]; then
      echo ""
      echo "### $dir"
      find "$ROOT/$dir" -maxdepth 4 -type f \
        -not -path "*/node_modules/*" \
        -not -path "*/.next/*" \
        -not -path "*/dist/*" \
        -not -path "*/build/*" \
        | sed "s|$ROOT/||" | sort
    fi
  done

  echo ""
  echo "## Package files"
  for file in package.json pnpm-lock.yaml package-lock.json yarn.lock next.config.js next.config.mjs vite.config.js vite.config.ts tailwind.config.js tailwind.config.ts tsconfig.json; do
    if [ -f "$ROOT/$file" ]; then
      echo "- $file"
    fi
  done

  echo ""
  echo "## Image and asset inventory"
  find "$ROOT" \
    \( -path "*/node_modules/*" -o -path "*/.git/*" -o -path "*/.next/*" -o -path "*/dist/*" -o -path "*/build/*" -o -path "*/exports/*" -o -path "*/.review-export/*" \) -prune -o \
    -type f \( \
      -iname "*.jpg" -o \
      -iname "*.jpeg" -o \
      -iname "*.png" -o \
      -iname "*.webp" -o \
      -iname "*.avif" -o \
      -iname "*.svg" \
    \) -print | sed "s|$ROOT/||" | sort

  echo ""
  echo "## Env files present, names only"
  find "$ROOT" -maxdepth 2 \
    \( -path "*/node_modules/*" -o -path "*/.git/*" \) -prune -o \
    -type f -name ".env*" -print | sed "s|$ROOT/||" | sort

} > "$REPORT"

cd "$STAGING_DIR"
zip -rq "$ZIP_PATH" "$PROJECT_NAME"
cd "$ROOT"

rm -rf "$STAGING_DIR"

echo ""
echo "Created:"
echo "$ZIP_PATH"

echo ""
echo "Size:"
du -h "$ZIP_PATH" || true

echo ""
echo "Checksum:"
if command -v shasum >/dev/null 2>&1; then
  shasum -a 256 "$ZIP_PATH" | tee "$ZIP_PATH.sha256"
elif command -v sha256sum >/dev/null 2>&1; then
  sha256sum "$ZIP_PATH" | tee "$ZIP_PATH.sha256"
else
  echo "No checksum tool found."
fi

echo ""
echo "Before uploading, you can inspect the ZIP with:"
echo "unzip -l \"$ZIP_PATH\" | less"
