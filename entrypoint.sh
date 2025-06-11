#!/bin/sh

echo "Starting Reflex app in development mode..."
reflex run --host 0.0.0.0 --port 3000  # El host 0.0.0.0 permite conexiones externas (necesario en Docker)