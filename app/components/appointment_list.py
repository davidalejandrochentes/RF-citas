import reflex as rx
from app.states.state import BarberState, Appointment


def _appointment_card(
    appointment: Appointment,
) -> rx.Component:
    return rx.el.div(
        rx.el.div(
            rx.el.div(
                rx.el.div(
                    rx.icon(
                        "user",
                        class_name="w-5 h-5 text-blue-500",
                    ),
                    rx.el.p(
                        appointment["name"],
                        class_name="font-semibold text-lg text-gray-800",
                    ),
                    class_name="flex items-center gap-3",
                ),
                rx.el.button(
                    rx.icon("x", class_name="w-4 h-4"),
                    on_click=lambda: BarberState.delete_appointment(
                        appointment["id"]
                    ),
                    class_name="text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors",
                ),
                class_name="flex justify-between items-center",
            ),
            rx.el.div(
                class_name="my-4 border-t border-gray-100"
            ),
            rx.el.div(
                rx.el.div(
                    rx.icon(
                        "calendar",
                        class_name="w-4 h-4 text-gray-500",
                    ),
                    rx.el.span(
                        f"{appointment['date']} a las ",
                        class_name="text-sm text-gray-600",
                    ),
                    rx.moment(
                        appointment["time"],
                        format="hh:mm A",
                        parse="HH:mm",
                        class_name="text-sm text-gray-600",
                    ),
                    class_name="flex items-center gap-2",
                ),
                rx.el.div(
                    rx.icon(
                        "scissors",
                        class_name="w-4 h-4 text-gray-500",
                    ),
                    rx.el.p(
                        appointment["service"],
                        class_name="text-sm text-gray-600",
                    ),
                    class_name="flex items-center gap-2",
                ),
                rx.el.div(
                    rx.icon(
                        "user-check",
                        class_name="w-4 h-4 text-gray-500",
                    ),
                    rx.el.p(
                        f"con {appointment['barber']}",
                        class_name="text-sm text-gray-600",
                    ),
                    class_name="flex items-center gap-2",
                ),
                rx.el.div(
                    rx.icon(
                        "phone",
                        class_name="w-4 h-4 text-gray-500",
                    ),
                    rx.el.p(
                        appointment["phone"],
                        class_name="text-sm text-gray-600",
                    ),
                    class_name="flex items-center gap-2",
                ),
                class_name="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-3 text-center sm:text-left",
            ),
        ),
        class_name="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg hover:border-blue-200 transition-all duration-300",
    )


def appointment_list() -> rx.Component:
    return rx.el.div(
        rx.el.h2(
            "Próximas Citas",
            class_name="text-2xl font-bold text-gray-800 mb-6 text-center",
        ),
        rx.cond(
            BarberState.sorted_appointments.length() > 0,
            rx.el.div(
                rx.foreach(
                    BarberState.sorted_appointments,
                    _appointment_card,
                ),
                class_name="flex flex-col gap-6",
            ),
            rx.el.div(
                rx.icon(
                    "calendar-off",
                    class_name="w-16 h-16 text-gray-300",
                ),
                rx.el.p(
                    "No hay citas agendadas.",
                    class_name="text-gray-500 mt-4",
                ),
                class_name="flex flex-col items-center justify-center bg-gray-50 p-10 rounded-xl border border-dashed border-gray-200",
            ),
        ),
        class_name="w-full max-w-3xl mt-12",
    )