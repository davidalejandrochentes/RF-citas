import reflex as rx
import os

config = rx.Config(
    app_name="app",
    backend_port=int(os.getenv("PORT", 8080)),
    api_url="https://rf-agenda-de-citas-production.up.railway.app",
)