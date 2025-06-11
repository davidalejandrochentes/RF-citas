#!/bin/sh

echo "Starting Reflex app with Caddy proxy..."

# Verificar que no haya procesos previos
pkill -f "reflex" || true
pkill -f "caddy" || true

# Esperar un momento
sleep 2

# Iniciar el backend de Reflex en segundo plano
echo "Starting Reflex backend on port 8000..."
reflex run --env prod --backend-only --backend-port 8000 &

# Guardar el PID del backend
BACKEND_PID=$!

# Esperar a que el backend esté listo
echo "Waiting for backend to be ready..."
for i in {1..30}; do
    if curl -f http://localhost:8000/ping >/dev/null 2>&1; then
        echo "Backend is ready!"
        break
    fi
    echo "Waiting for backend... attempt $i/30"
    sleep 2
done

# Verificar que el backend sigue ejecutándose
if ! kill -0 $BACKEND_PID 2>/dev/null; then
    echo "Backend failed to start!"
    exit 1
fi

# Iniciar Caddy en primer plano
echo "Starting Caddy proxy on port 3000..."
exec caddy run --config /etc/caddy/Caddyfile