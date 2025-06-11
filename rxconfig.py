import reflex as rx
import os

config = rx.Config(
    app_name="app",
    backend_host="0.0.0.0",
    backend_port=int(os.getenv("PORT", 8000)),
    frontend_port=3000,
)