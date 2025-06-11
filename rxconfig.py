import reflex as rx
import os

config = rx.Config(
    app_name="app",
    # En producción, usar el puerto que Railway asigna
    backend_port=int(os.environ.get("PORT", 8000)),
    # En producción, el frontend se sirve desde el mismo puerto del backend
    frontend_port=3000,  # Solo se usa en desarrollo
)