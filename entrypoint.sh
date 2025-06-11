#!/bin/sh

echo "Starting Reflex app with Caddy proxy..."

# Iniciar el backend de Reflex en segundo plano
echo "Starting Reflex backend on port 8000..."
reflex run --env prod --backend-only --backend-port 8000 &

# Esperar un momento para que el backend inicie
sleep 5

# Verificar que el backend esté ejecutándose
echo "Checking backend health..."
curl -f http://localhost:8000/ping || echo "Backend not ready yet, continuing..."

# Iniciar Caddy en primer plano
echo "Starting Caddy proxy on port 3000..."
caddy run --config /etc/caddy/Caddyfile