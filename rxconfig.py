import reflex as rx
import os

config = rx.Config(
    app_name="app",
    # Usar el puerto que Railway asigna automáticamente
    backend_port=int(os.environ.get("PORT", 8000)),
    # Deshabilitar el servidor de desarrollo frontend
    frontend_port=None,
    # Configurar para producción
    deploy_url=os.environ.get("RAILWAY_STATIC_URL", "http://localhost:8000"),
    # Configurar el backend URL para que el frontend sepa dónde conectarse
    backend_host="0.0.0.0",
    # Habilitar modo producción
    env=rx.Env.PROD,
)