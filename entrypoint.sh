#!/bin/sh

echo "Preparing Reflex app for production..."

# Exportar el frontend para servir archivos estáticos
echo "Exporting frontend..."
reflex export --frontend-only

echo "Starting Reflex app in production mode..."
# Ejecutar solo el backend que servirá tanto la API como los archivos estáticos
reflex run --env prod --backend-only --backend-host 0.0.0.0 --backend-port $PORT