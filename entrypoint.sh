#!/bin/sh

# Obtener el puerto de Railway o usar 3000 por defecto
PORT=${PORT:-3000}

echo "Starting Reflex app in production mode on port $PORT..."

# Exportar las variables de entorno para Reflex
export API_URL="https://rf-agenda-de-citas-production.up.railway.app"
export DEPLOY_URL="https://rf-agenda-de-citas-production.up.railway.app"

# Inicializar y compilar la aplicación
reflex init
reflex export --frontend-only --no-zip

echo "Reflex app exported successfully"

# Ejecutar en modo producción con un solo puerto
exec reflex run --env prod --frontend-port $PORT --backend-port $PORT --host 0.0.0.0