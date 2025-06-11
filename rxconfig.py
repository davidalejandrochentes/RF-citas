import reflex as rx
import os

config = rx.Config(
    app_name="app",
    show_built_with_reflex=True,
    telemetry_enabled=False,
    # El frontend será servido por Caddy, no por Reflex
    frontend_port=int(os.getenv("FRONTEND_PORT", "3000")),
    # El backend sigue en el puerto 8000 internamente
    backend_port=int(os.getenv("BACKEND_PORT", "8000")),
    # API URL para que el frontend se comunique con el backend a través del proxy
    api_url="http://localhost:3000",
    # Configuración para producción
    deploy_url=os.getenv("DEPLOY_URL", "http://localhost:3000"),
)