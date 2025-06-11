#!/bin/sh
echo "Starting Reflex app in production mode..."

# Asegurarse de que las dependencias frontend estén instaladas
reflex export --frontend-only --no-zip

# Ejecutar la aplicación
reflex run --env prod --backend-host 0.0.0.0 --frontend-port 3001