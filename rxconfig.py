import reflex as rx

config = rx.Config(
    app_name="app",
    backend_host="0.0.0.0",
    backend_port=8000,
    frontend_port=3000,
    api_url="https://rf-agenda-de-citas-production.up.railway.app:8000/_event",
)