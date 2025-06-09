import reflex as rx
from app.components.appointment_form import appointment_form
from app.components.appointment_list import appointment_list


def index() -> rx.Component:
    return rx.el.main(
        rx.el.div(
            rx.el.div(
                rx.el.div(
                    rx.icon(
                        "scissors",
                        class_name="h-10 w-10 text-blue-600",
                    ),
                    rx.el.h1(
                        "Barbería El Tío",
                        class_name="text-4xl font-extrabold tracking-tight text-gray-800",
                    ),
                    class_name="flex items-center gap-4",
                ),
                rx.el.p(
                    "Agenda tu cita de forma rápida y sencilla.",
                    class_name="text-lg text-gray-600 mt-2",
                ),
                class_name="text-center mb-10",
            ),
            appointment_form(),
            appointment_list(),
            class_name="container mx-auto flex flex-col items-center p-4 md:p-8",
        ),
        class_name="min-h-screen bg-gray-50 font-['Inter']",
    )


app = rx.App(
    theme=rx.theme(appearance="light"),
    head_components=[
        rx.el.link(
            rel="preconnect",
            href="https://fonts.googleapis.com",
        ),
        rx.el.link(
            rel="preconnect",
            href="https://fonts.gstatic.com",
            crossorigin="",
        ),
        rx.el.link(
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
            rel="stylesheet",
        ),
    ],
)
app.add_page(index, route="/", title="Barbería El Tío")