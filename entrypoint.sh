#!/bin/bash
echo "Starting Reflex app in production mode..."
reflex run --env prod --backend-host 0.0.0.0 --frontend-port ${PORT:-3000} --backend-port ${PORT:-3000} --api-domain ${RAILWAY_PUBLIC_DOMAIN:-localhost} --frontend-host 0.0.0.0