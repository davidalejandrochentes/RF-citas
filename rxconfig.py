import reflex as rx
import os

config = rx.Config(
    app_name="app",
    backend_host="0.0.0.0",
    backend_port=int(os.getenv("PORT", 8000)),
    frontend_port=3001,
    # Forzar que use la URL del dominio público
    api_url=os.getenv("RAILWAY_STATIC_URL") or os.getenv("RAILWAY_PUBLIC_DOMAIN") or None,
)