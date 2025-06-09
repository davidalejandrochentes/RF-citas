import reflex as rx
from app.states.state import BarberState


def _calendar_header() -> rx.Component:
    return rx.el.div(
        rx.el.button(
            rx.icon("chevron-left"),
            on_click=lambda: BarberState.change_month(-1),
            class_name="p-2 rounded-md hover:bg-gray-100",
            type="button",
        ),
        rx.el.h3(
            BarberState.display_month_str,
            class_name="font-semibold text-lg w-32 text-center",
        ),
        rx.el.button(
            rx.icon("chevron-right"),
            on_click=lambda: BarberState.change_month(1),
            class_name="p-2 rounded-md hover:bg-gray-100",
            type="button",
        ),
        class_name="flex items-center justify-between mb-4",
    )


def _day_component(day_data: dict) -> rx.Component:
    return rx.cond(
        day_data["is_in_month"],
        rx.el.button(
            day_data["day"],
            on_click=lambda: BarberState.select_date(
                day_data["date_str"]
            ),
            disabled=day_data["is_disabled"],
            type="button",
            class_name=rx.cond(
                day_data["is_disabled"],
                "p-2 rounded-full w-10 h-10 flex items-center justify-center text-gray-300 cursor-not-allowed",
                rx.cond(
                    day_data["is_selected"],
                    "p-2 rounded-full bg-blue-600 text-white w-10 h-10 flex items-center justify-center font-bold shadow-lg",
                    rx.cond(
                        day_data["is_today"],
                        "p-2 rounded-full bg-blue-100 text-blue-600 w-10 h-10 flex items-center justify-center font-semibold",
                        "p-2 rounded-full hover:bg-gray-100 w-10 h-10 flex items-center justify-center transition-colors",
                    ),
                ),
            ),
        ),
        rx.el.div(class_name="p-2 w-10 h-10"),
    )


def calendar_view() -> rx.Component:
    return rx.el.div(
        _calendar_header(),
        rx.el.div(
            rx.foreach(
                BarberState.week_days,
                lambda day: rx.el.div(
                    day,
                    class_name="text-center font-medium text-sm text-gray-500",
                ),
            ),
            class_name="grid grid-cols-7 gap-2 mb-2",
        ),
        rx.el.div(
            rx.foreach(
                BarberState.calendar_weeks,
                lambda week: rx.el.div(
                    rx.foreach(week, _day_component),
                    class_name="grid grid-cols-7 gap-2",
                ),
            ),
            class_name="flex flex-col gap-2",
        ),
        class_name="w-full",
    )


def barber_selection_view() -> rx.Component:
    return rx.el.div(
        rx.el.h4(
            f"Seleccione un barbero para {BarberState.selected_date}",
            class_name="font-semibold mb-4 text-center text-gray-700",
        ),
        rx.el.select(
            rx.el.option(
                "Seleccione un barbero",
                value="",
                disabled=True,
            ),
            rx.foreach(
                BarberState.barbers,
                lambda barber: rx.el.option(
                    barber, value=barber
                ),
            ),
            on_change=BarberState.select_barber,
            value=BarberState.selected_barber,
            class_name="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none bg-white",
        ),
        class_name="w-full mt-6",
    )


def time_slots_view() -> rx.Component:
    return rx.el.div(
        rx.el.h4(
            f"Horas disponibles para {BarberState.selected_barber} el {BarberState.selected_date}",
            class_name="font-semibold mb-4 text-center text-gray-700",
        ),
        rx.cond(
            BarberState.available_times_for_selected_date_and_barber.length()
            > 0,
            rx.el.div(
                rx.foreach(
                    BarberState.available_times_for_selected_date_and_barber,
                    lambda time: rx.el.button(
                        rx.moment(
                            time,
                            format="hh:mm A",
                            parse="HH:mm",
                        ),
                        on_click=lambda: BarberState.select_time(
                            time
                        ),
                        type="button",
                        class_name=rx.cond(
                            BarberState.selected_time
                            == time,
                            "w-full py-2 px-4 rounded-lg bg-blue-600 text-white font-semibold shadow-md",
                            "w-full py-2 px-4 rounded-lg bg-gray-100 hover:bg-blue-100 text-gray-800 font-medium transition-colors",
                        ),
                    ),
                ),
                class_name="grid grid-cols-3 sm:grid-cols-4 gap-3",
            ),
            rx.el.p(
                "No hay horas disponibles para este barbero en este día.",
                class_name="text-center text-gray-500 py-4",
            ),
        ),
        class_name="w-full mt-6",
    )


def scheduler() -> rx.Component:
    return rx.el.div(
        calendar_view(),
        rx.cond(
            BarberState.selected_date != "",
            barber_selection_view(),
        ),
        rx.cond(
            (BarberState.selected_date != "")
            & (BarberState.selected_barber != ""),
            time_slots_view(),
        ),
        class_name="flex flex-col items-center gap-4 w-full",
    )