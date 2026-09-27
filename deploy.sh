#!/bin/sh
set -eu

IMAGE="${IMAGE:-japolic-ui:latest}"
CONTAINER="${CONTAINER:-japolic-ui}"
PORT="${PORT:-80}"

cd "$(dirname "$0")"

echo "Building ${IMAGE}..."
docker build --pull -t "$IMAGE" .

echo "Replacing container ${CONTAINER}..."
docker rm -f "$CONTAINER" >/dev/null 2>&1 || true
docker run -d \
  --name "$CONTAINER" \
  --restart unless-stopped \
  -p "${PORT}:80" \
  "$IMAGE"

echo "Japolic UI is serving on port ${PORT}."
echo "Open http://<server-ip>:${PORT}"
