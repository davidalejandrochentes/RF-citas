#!/bin/sh

echo "Starting Reflex app in production mode..."

# Inicializar la aplicación (esto compila el frontend)
echo "Initializing Reflex app..."
reflex init

# Exportar la aplicación estática
echo "Exporting frontend..."
reflex export --frontend-only --no-zip

# Ejecutar en modo producción
echo "Starting production server..."
reflex run --env prod --backend-only