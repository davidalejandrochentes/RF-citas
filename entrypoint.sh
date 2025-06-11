#!/bin/sh

echo "Starting Reflex app in production mode..."

export PORT=${PORT:-8000}

echo "Running on single port: $PORT"

# Ejecutar sin --frontend-port para que use el mismo puerto
reflex run --env prod --backend-host 0.0.0.0 --backend-port $PORT