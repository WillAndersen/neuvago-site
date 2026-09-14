#!/bin/bash
set -euo pipefail
PACKAGE_DIR="$(cd "$(dirname "$0")" && pwd -P)"
exec python3 -B "$PACKAGE_DIR/support/run.py" "${1:-$HOME/neuvago-site}"
