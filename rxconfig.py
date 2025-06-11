import reflex as rx

config = rx.Config(
    app_name="app",
    # Configuración de Tailwind (ya que confirmas que lo usas)
    plugins=[rx.plugins.TailwindV3Plugin()],
    
    # Configuración para producción
    backend_host="0.0.0.0",
    frontend_host="0.0.0.0",
    
    # Variables de entorno para Railway
    env=rx.Env.PROD,
    )

