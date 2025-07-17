import reflex as rx
from app.states.auth_state import AuthState
from app.states.state import BarberState, Barber, Service
from app.components.appointment_list import appointment_list


def _management_card(
    title: str,
    add_form: rx.Component,
    item_list: rx.Component,
) -> rx.Component:
    return rx.el.div(
        rx.el.h2(
            title,
            class_name="text-2xl font-bold text-gray-800 mb-4 text-left",
        ),
        add_form,
        rx.el.div(
            class_name="my-6 border-t border-gray-200"
        ),
        item_list,
        class_name="w-full bg-white p-6 rounded-xl shadow-md border border-gray-100",
    )


def _edit_barber_dialog() -> rx.Component:
    return rx.cond(
        BarberState.show_edit_barber_dialog,
        rx.el.div(
            rx.el.div(
                rx.el.div(
                    rx.el.h3(
                        "Editar Barbero",
                        class_name="text-xl font-semibold",
                    ),
                    rx.el.form(
                        rx.el.input(
                            default_value=BarberState.editing_item_name,
                            name="name",
                            placeholder="Nombre del barbero",
                            class_name="w-full px-4 py-2 mt-4 rounded-lg border",
                        ),
                        rx.el.div(
                            rx.el.button(
                                "Cancelar",
                                on_click=BarberState.close_edit_dialogs,
                                class_name="px-4 py-2 bg-gray-200 rounded-lg",
                                type="button",
                            ),
                            rx.el.button(
                                "Guardar",
                                class_name="px-4 py-2 bg-blue-600 text-white rounded-lg",
                                type="submit",
                            ),
                            class_name="flex justify-end gap-4 mt-4",
                        ),
                        on_submit=BarberState.save_barber_edit,
                    ),
                    class_name="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md",
                ),
                class_name="fixed inset-0 z-50 flex items-center justify-center p-4",
            ),
            rx.el.div(
                on_click=BarberState.close_edit_dialogs,
                class_name="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm",
            ),
        ),
    )


def _edit_service_dialog() -> rx.Component:
    return rx.cond(
        BarberState.show_edit_service_dialog,
        rx.el.div(
            rx.el.div(
                rx.el.div(
                    rx.el.h3(
                        "Editar Servicio",
                        class_name="text-xl font-semibold",
                    ),
                    rx.el.form(
                        rx.el.input(
                            default_value=BarberState.editing_item_name,
                            name="name",
                            placeholder="Nombre del servicio",
                            class_name="w-full px-4 py-2 mt-4 rounded-lg border",
                        ),
                        rx.el.input(
                            default_value=BarberState.editing_item_price.to_string(),
                            name="price",
                            type="number",
                            placeholder="Precio",
                            class_name="w-full px-4 py-2 mt-2 rounded-lg border",
                        ),
                        rx.el.div(
                            rx.el.button(
                                "Cancelar",
                                on_click=BarberState.close_edit_dialogs,
                                class_name="px-4 py-2 bg-gray-200 rounded-lg",
                                type="button",
                            ),
                            rx.el.button(
                                "Guardar",
                                class_name="px-4 py-2 bg-blue-600 text-white rounded-lg",
                                type="submit",
                            ),
                            class_name="flex justify-end gap-4 mt-4",
                        ),
                        on_submit=BarberState.save_service_edit,
                    ),
                    class_name="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md",
                ),
                class_name="fixed inset-0 z-50 flex items-center justify-center p-4",
            ),
            rx.el.div(
                on_click=BarberState.close_edit_dialogs,
                class_name="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm",
            ),
        ),
    )


def barber_manager() -> rx.Component:
    return _management_card(
        "Gestionar Barberos",
        add_form=rx.el.form(
            rx.el.div(
                rx.el.input(
                    placeholder="Nombre del nuevo barbero",
                    name="name",
                    class_name="flex-grow px-4 py-2 rounded-lg sm:rounded-r-none border border-gray-300 focus:ring-2 focus:ring-blue-500",
                ),
                rx.el.button(
                    "Agregar",
                    type="submit",
                    class_name="px-6 py-2 bg-blue-600 text-white rounded-lg sm:rounded-l-none font-medium hover:bg-blue-700",
                ),
                class_name="flex flex-col sm:flex-row gap-2 sm:gap-0",
            ),
            on_submit=BarberState.add_barber,
            reset_on_submit=True,
        ),
        item_list=rx.el.div(
            rx.foreach(
                BarberState.barbers,
                lambda barber: rx.el.div(
                    rx.el.p(
                        barber["name"],
                        class_name="font-medium",
                    ),
                    rx.el.div(
                        rx.el.button(
                            rx.icon(
                                "pencil", class_name="w-4 h-4"
                            ),
                            on_click=lambda: BarberState.open_edit_barber_dialog(
                                barber
                            ),
                            class_name="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full",
                        ),
                        rx.el.button(
                            rx.icon(
                                "trash",
                                class_name="w-4 h-4",
                            ),
                            on_click=lambda: BarberState.delete_barber(
                                barber["id"]
                            ),
                            class_name="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full",
                        ),
                        class_name="flex items-center gap-2",
                    ),
                    class_name="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg",
                ),
            ),
            class_name="flex flex-col gap-2",
        ),
    )


def service_manager() -> rx.Component:
    return _management_card(
        "Gestionar Servicios",
        add_form=rx.el.form(
            rx.el.div(
                rx.el.input(
                    placeholder="Nombre del servicio",
                    name="name",
                    class_name="flex-grow px-4 py-2 rounded-lg sm:rounded-r-none border border-gray-300 focus:ring-2 focus:ring-blue-500",
                ),
                rx.el.input(
                    placeholder="Precio",
                    type="number",
                    name="price",
                    class_name="w-full sm:w-28 px-4 py-2 rounded-lg sm:rounded-none border-y sm:border-y border-x sm:border-x-0 border-gray-300 focus:ring-2 focus:ring-blue-500",
                ),
                rx.el.button(
                    "Agregar",
                    type="submit",
                    class_name="px-6 py-2 bg-blue-600 text-white rounded-lg sm:rounded-l-none font-medium hover:bg-blue-700",
                ),
                class_name="flex flex-col sm:flex-row gap-2 sm:gap-0",
            ),
            on_submit=BarberState.add_service,
            reset_on_submit=True,
        ),
        item_list=rx.el.div(
            rx.foreach(
                BarberState.services,
                lambda service: rx.el.div(
                    rx.el.p(
                        f"{service['name']} - ${service['price']}",
                        class_name="font-medium",
                    ),
                    rx.el.div(
                        rx.el.button(
                            rx.icon(
                                "pencil", class_name="w-4 h-4"
                            ),
                            on_click=lambda: BarberState.open_edit_service_dialog(
                                service
                            ),
                            class_name="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-full",
                        ),
                        rx.el.button(
                            rx.icon(
                                "trash",
                                class_name="w-4 h-4",
                            ),
                            on_click=lambda: BarberState.delete_service(
                                service["id"]
                            ),
                            class_name="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-full",
                        ),
                        class_name="flex items-center gap-2",
                    ),
                    class_name="flex justify-between items-center p-3 hover:bg-gray-50 rounded-lg",
                ),
            ),
            class_name="flex flex-col gap-2",
        ),
    )


def _availability_calendar_day(day_data: dict) -> rx.Component:
    """Component for a single day in the availability calendar."""
    return rx.cond(
        day_data["is_in_month"],
        rx.el.button(
            day_data["day"],
            on_click=lambda: BarberState.handle_availability_date_change(
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


def availability_manager() -> rx.Component:
    """Component to manage barber availability."""
    return rx.el.div(
        rx.el.h2(
            "Gestionar Disponibilidad",
            class_name="text-2xl font-bold text-gray-800 mb-4 text-left",
        ),
        rx.el.div(
            rx.el.select(
                rx.foreach(
                    BarberState.barbers,
                    lambda barber: rx.el.option(
                        barber["name"], value=barber["id"]
                    ),
                ),
                value=BarberState.availability_selected_barber_id,
                on_change=BarberState.handle_availability_barber_change,
                class_name="w-full md:w-1/3 px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white",
            ),
            class_name="mb-4",
        ),
        rx.el.div(
            # Calendar View
            rx.el.div(
                rx.el.div(
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
                ),
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
                        BarberState.admin_calendar_weeks,
                        lambda week: rx.el.div(
                            rx.foreach(week, _availability_calendar_day),
                            class_name="grid grid-cols-7 gap-2",
                        ),
                    ),
                    class_name="flex flex-col gap-2",
                ),
                class_name="w-full md:w-1/2",
            ),
            # Time Slots View
            rx.cond(
                BarberState.availability_selected_date != "",
                rx.el.div(
                    rx.el.h4(
                        f"Horarios para {BarberState.availability_selected_date}",
                        class_name="font-semibold mb-4 text-center text-gray-700",
                    ),
                    rx.el.div(
                        rx.foreach(
                            BarberState.all_possible_times,
                            lambda time: rx.el.button(
                                rx.moment(time, format="hh:mm A", parse="HH:mm"),
                                on_click=lambda: BarberState.toggle_availability_time(time),
                                class_name=rx.cond(
                                    BarberState.availability_selected_times.contains(time),
                                    "w-full py-2 px-2 rounded-lg bg-blue-600 text-white font-semibold shadow-md",
                                    "w-full py-2 px-2 rounded-lg bg-gray-100 hover:bg-blue-100 text-gray-800 font-medium transition-colors",
                                ),
                            ),
                        ),
                        class_name="grid grid-cols-3 sm:grid-cols-4 gap-3",
                    ),
                    rx.el.button(
                        "Guardar Disponibilidad",
                        on_click=BarberState.save_availability,
                        class_name="w-full mt-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all",
                    ),
                    class_name="w-full md:w-1/2 p-4 md:p-8 border-l border-gray-200",
                ),
            ),
            class_name="flex flex-col md:flex-row gap-8",
        ),
        class_name="w-full bg-white p-6 rounded-xl shadow-md border border-gray-100 mt-6 mb-8",
    )


def _filter_controls() -> rx.Component:
    return rx.el.div(
        rx.el.h3(
            "Filtrar Citas",
            class_name="text-xl font-bold text-gray-800 mb-4",
        ),
        rx.el.div(
            rx.el.input(
                placeholder="Nombre del cliente",
                on_change=BarberState.set_filter_name.debounce(
                    300
                ),
                default_value=BarberState.filter_name,
                class_name="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500",
            ),
            rx.el.input(
                placeholder="Teléfono",
                on_change=BarberState.set_filter_phone.debounce(
                    300
                ),
                default_value=BarberState.filter_phone,
                type="tel",
                class_name="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500",
            ),
            rx.el.input(
                on_change=BarberState.set_filter_date,
                default_value=BarberState.filter_date,
                type="date",
                class_name="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500",
            ),
            rx.el.select(
                rx.el.option(
                    "Todos los servicios", value=""
                ),
                rx.foreach(
                    BarberState.services,
                    lambda service: rx.el.option(
                        service["name"],
                        value=service["name"],
                    ),
                ),
                on_change=BarberState.set_filter_service,
                default_value=BarberState.filter_service,
                key=f"filter-service-{BarberState.filter_service}",
                class_name="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 bg-white",
            ),
            class_name="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4",
        ),
        rx.el.button(
            "Limpiar Filtros",
            on_click=BarberState.clear_filters,
            class_name="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 font-medium transition-colors",
        ),
        class_name="w-full bg-white p-6 rounded-xl shadow-md border border-gray-100 mb-8",
    )


def admin_page() -> rx.Component:
    return rx.el.main(
        _edit_barber_dialog(),
        _edit_service_dialog(),
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
            rx.el.div(
                barber_manager(),
                service_manager(),
                class_name="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8",
            ),
            availability_manager(),
            _filter_controls(),
            appointment_list(),
            class_name="container mx-auto flex flex-col items-center p-4 md:p-8",
        ),
        class_name="min-h-screen bg-gray-50 font-['Inter']",
    )