#!/bin/sh

echo "Starting Reflex app in production mode..."

# Railway asigna automáticamente un puerto via la variable $PORT
PORT=${PORT:-8000}
echo "Using PORT: $PORT"

# Mostrar versiones para debug
echo "Node version: $(node --version)"
echo "NPM version: $(npm --version)"
echo "Python version: $(python --version)"

# Limpiar instalaciones previas si existen
rm -rf .web/

# Inicializar dependencias si no existen
echo "Initializing Reflex app..."
reflex init --loglevel debug

# Ejecutar Reflex con la configuración correcta para Railway
echo "Starting Reflex server..."
reflex run --env prod --backend-host 0.0.0.0 --backend-port $PORT --frontend-host 0.0.0.0 --frontend-port 3000