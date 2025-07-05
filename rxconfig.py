import reflex as rx
import reflex.plugins

config = rx.Config(
    app_name="app",
    show_built_with_reflex=False,
    plugins=[
        rx.plugins.TailwindV3Plugin(),
    ],
)
