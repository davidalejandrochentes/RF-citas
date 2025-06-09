import reflex as rx
from app.states.auth_state import AuthState
from app.components.appointment_list import appointment_list


def admin_page() -> rx.Component:
    return rx.el.main(
        rx.el.div(
            rx.el.div(
                rx.el.h1(
                    "Panel de Administrador",
                    class_name="text-4xl font-extrabold tracking-tight text-gray-800",
                ),
                rx.el.button(
                    "Cerrar Sesión",
                    on_click=AuthState.logout,
                    class_name="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium transition-colors",
                ),
                class_name="w-full flex justify-between items-center mb-10",
            ),
            appointment_list(),
            class_name="container mx-auto flex flex-col items-center p-4 md:p-8",
        ),
        class_name="min-h-screen bg-gray-50 font-['Inter']",
    )