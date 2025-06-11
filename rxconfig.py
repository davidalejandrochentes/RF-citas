import reflex as rx

config = rx.Config(
    app_name="app",
    backend_host="https://rf-agenda-de-citas-production.up.railway.app",
    backend_port=8000,
    frontend_port=3000,
    # Usar la URL pública de Railway para la API
    #api_url=f"https://rf-agenda-de-citas-production.up.railway.app/8000",
)