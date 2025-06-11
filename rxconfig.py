import reflex as rx
import os

config = rx.Config(
    app_name="app",
    frontend_port=int(os.environ.get("PORT", 3000)),
    backend_port=int(os.environ.get("PORT", 3000)),
    api_url=os.environ.get("RAILWAY_PUBLIC_DOMAIN", ""),
    cors_allowed_origins=["*"],  # En producción, reemplaza con tus dominios específicos
)
