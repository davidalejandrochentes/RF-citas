import reflex as rx
import os

# Railway proporciona estas variables de entorno
railway_url = os.getenv("RAILWAY_PUBLIC_DOMAIN")
port = int(os.getenv("PORT", 8000))

config = rx.Config(
    app_name="app",
    backend_host="0.0.0.0",
    backend_port=port,
    frontend_port=3001,
    # Usar la URL pública de Railway para la API
    api_url=f"https://{railway_url}" if railway_url else f"http://0.0.0.0:{port}",
)