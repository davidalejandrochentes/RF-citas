import reflex as rx
import os

config = rx.Config(
    app_name="app",
    backend_host="0.0.0.0",
    backend_port=8000,
    frontend_port=3000,
    api_url=f"http://0.0.0.0:8000" if os.getenv("RAILWAY_ENVIRONMENT") else None,
)