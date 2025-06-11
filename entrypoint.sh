#!/bin/sh

# Obtener el puerto de Railway
PORT=${PORT:-8080}

echo "Starting Reflex app in production mode on port $PORT..."

# Exportar las variables de entorno para Reflex
export API_URL="https://rf-agenda-de-citas-production.up.railway.app"
export DEPLOY_URL="https://rf-agenda-de-citas-production.up.railway.app"

# Inicializar la aplicación (sin export que está fallando)
reflex init

echo "Starting production server..."

# Ejecutar en modo producción con los parámetros correctos
exec reflex run --env prod --backend-host 0.0.0.0 --backend-port $PORT