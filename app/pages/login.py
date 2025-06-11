import reflex as rx
from app.states.auth_state import AuthState


def login_form() -> rx.Component:
    return rx.el.div(
        rx.el.h2(
            "Admin",
            class_name="text-2xl font-bold text-gray-800 mb-6 text-center",
        ),
        rx.el.form(
            rx.el.div(
                rx.el.label(
                    "Usuario",
                    html_for="username",
                    class_name="block text-sm font-medium text-gray-700 mb-1",
                ),
                rx.el.input(
                    id="username",
                    name="username",
                    placeholder="admin",
                    required=True,
                    class_name="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",
                ),
                class_name="w-full mb-4",
            ),
            rx.el.div(
                rx.el.label(
                    "Contraseña",
                    html_for="password",
                    class_name="block text-sm font-medium text-gray-700 mb-1",
                ),
                rx.el.input(
                    id="password",
                    name="password",
                    type="password",
                    placeholder="admin",
                    required=True,
                    class_name="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",
                ),
                class_name="w-full mb-6",
            ),
            rx.el.button(
                "Login",
                type="submit",
                class_name="w-full mt-4 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg",
            ),
            on_submit=AuthState.login,
            reset_on_submit=True,
            class_name="w-full",
        ),
        class_name="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 w-full max-w-sm",
    )


def login_page() -> rx.Component:
    return rx.el.main(
        rx.el.div(
            login_form(),
            class_name="container mx-auto flex flex-col items-center justify-center min-h-screen p-4 md:p-8",
        ),
        class_name="min-h-screen bg-gray-50 font-['Inter']",
    )