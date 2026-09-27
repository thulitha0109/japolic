#!/bin/sh
set -eu

IMAGE="${IMAGE:-japolic-ui:latest}"
CONTAINER="${CONTAINER:-japolic-ui}"
PORT="${PORT:-80}"

SCRIPT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
cd "$SCRIPT_DIR"

if ! docker compose version >/dev/null 2>&1; then
  echo "Docker Compose v2 is required (docker compose)." >&2
  exit 1
fi

export IMAGE CONTAINER PORT

echo "Building and starting Japolic UI with Docker Compose..."
docker compose -f compose.yml up -d --build --remove-orphans

echo "Japolic UI is serving on port ${PORT}."
echo "Open http://<server-ip>:${PORT}"
