import reflex as rx
import os

# Obtener la URL del servicio de Railway
railway_url = os.getenv("RAILWAY_PUBLIC_DOMAIN")
backend_url = f"https://{railway_url}" if railway_url else "http://localhost:8000"

config = rx.Config(
    app_name="app",
    backend_host="0.0.0.0",
    backend_port=int(os.getenv("PORT", 8000)),
    frontend_port=3000,
    # Configurar la URL del backend para producción
    api_url=backend_url if railway_url else None,
)