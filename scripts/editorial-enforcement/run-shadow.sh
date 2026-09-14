#!/bin/bash
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
exec python3 -I -B "$SCRIPT_DIR/shadow_cli.py" "$@"
