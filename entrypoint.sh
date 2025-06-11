#!/bin/sh
echo "Starting Reflex app in production mode..."
PORT=${PORT:-8000}
echo "Using port: $PORT"
reflex run --env prod --backend-host 0.0.0.0 --backend-port $PORT --frontend-port 3001