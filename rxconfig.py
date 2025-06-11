import reflex as rx
import os

config = rx.Config(
    app_name="app",
    frontend_port=int(os.getenv("PORT", 3000)),
    backend_port=int(os.getenv("PORT", 3000)),
    api_url=os.getenv("API_URL", f"https://rf-agenda-de-citas-production.up.railway.app"),
    deploy_url=os.getenv("DEPLOY_URL", "https://rf-agenda-de-citas-production.up.railway.app"),
)