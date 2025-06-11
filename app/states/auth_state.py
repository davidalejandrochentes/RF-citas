import reflex as rx


class AuthState(rx.State):
    is_logged_in: bool = False

    @rx.event
    def login(self, form_data: dict):
        username = form_data.get("username", "")
        password = form_data.get("password", "")
        if username == "admin" and password == "admin":
            self.is_logged_in = True
            return rx.redirect("/admin")
        return rx.toast(
            "Usuario o contraseña incorrectos.",
            duration=3000,
        )

    @rx.event
    def logout(self):
        self.is_logged_in = False
        return rx.redirect("/")

    @rx.event
    def check_login(self):
        if not self.is_logged_in:
            return rx.redirect("/login")