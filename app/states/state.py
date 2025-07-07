import reflex as rx
from typing import TypedDict
import datetime
import calendar
import uuid
from app.states.db_service import (
    Appointment,
    Barber,
    Service,
    get_all_appointments,
    add_appointment_db,
    delete_appointment_db,
    get_all_barbers,
    add_barber_db,
    update_barber_db,
    delete_barber_db,
    get_all_services,
    add_service_db,
    update_service_db,
    delete_service_db,
    get_availability_for_barber,
    set_availability_for_barber,
    get_all_available_dates,
)


class BarberState(rx.State):
    appointments: list[Appointment] = []
    barbers: list[Barber] = []
    services: list[Service] = []
    new_barber_name: str = ""
    new_service_name: str = ""
    new_service_price: int = 0
    editing_item_id: str = ""
    editing_item_name: str = ""
    editing_item_price: int = 0
    show_edit_barber_dialog: bool = False
    show_edit_service_dialog: bool = False
    all_possible_times: list[str] = [
        "09:00", "09:30", "10:00", "10:30", "11:00", "11:30", "12:00", "12:30", 
        "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30",
        "18:00", "18:30", "19:00", "19:30", "20:00", "20:30", "21:00", "21:30",
        "22:00", "22:30", "23:00",
    ]
    display_month_date: datetime.date = (
        datetime.date.today()
    )
    selected_date: str = ""
    selected_time: str = ""
    selected_barber: str = ""
    show_confirm_dialog: bool = False
    pending_appointment_data: dict = {}
    spanish_months: list[str] = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ]
    week_days: list[str] = [
        "Lu",
        "Ma",
        "Mi",
        "Ju",
        "Vi",
        "Sá",
        "Do",
    ]
    filter_name: str = ""
    filter_phone: str = ""
    filter_service: str = ""
    filter_date: str = ""

    # State for availability management
    availability_selected_barber_id: str = ""
    availability_selected_date: str = ""
    availability_selected_times: list[str] = []
    
    # All dates with at least one available slot
    globally_available_dates: list[str] = []

    @rx.event
    def load_data(self):
        self.appointments = get_all_appointments()
        self.barbers = get_all_barbers()
        self.services = get_all_services()
        self.globally_available_dates = get_all_available_dates()
        if self.barbers:
            # Ensure a barber is selected for availability if not already
            if not self.availability_selected_barber_id:
                self.availability_selected_barber_id = self.barbers[0]["id"]
            # Load availability for the selected barber and date
            if self.availability_selected_date:
                self.availability_selected_times = get_availability_for_barber(
                    self.availability_selected_barber_id, self.availability_selected_date
                )

    @rx.event
    def add_barber(self, form_data: dict):
        barber_name = form_data.get("name", "").strip()
        if not barber_name:
            return rx.toast(
                "El nombre del barbero no puede estar vacío.",
                duration=3000,
            )
        new_barber = Barber(
            id=str(uuid.uuid4()), name=barber_name
        )
        add_barber_db(new_barber)
        yield BarberState.load_data()

    @rx.event
    def delete_barber(self, barber_id: str):
        delete_barber_db(barber_id)
        yield BarberState.load_data()

    @rx.event
    def open_edit_barber_dialog(self, barber: Barber):
        self.editing_item_id = barber["id"]
        self.editing_item_name = barber["name"]
        self.show_edit_barber_dialog = True

    @rx.event
    def save_barber_edit(self, form_data: dict):
        new_name = form_data.get("name", "").strip()
        if not new_name:
            return rx.toast(
                "El nombre no puede estar vacío.",
                duration=3000,
            )
        update_barber_db(self.editing_item_id, new_name)
        self.show_edit_barber_dialog = False
        yield BarberState.load_data()

    @rx.event
    def close_edit_dialogs(self):
        self.show_edit_barber_dialog = False
        self.show_edit_service_dialog = False
        self.editing_item_id = ""
        self.editing_item_name = ""
        self.editing_item_price = 0

    @rx.event
    def add_service(self, form_data: dict):
        service_name = form_data.get("name", "").strip()
        try:
            price_str = form_data.get("price", "0")
            service_price = (
                int(price_str) if price_str else 0
            )
        except (ValueError, TypeError):
            service_price = 0
        if not service_name or service_price <= 0:
            return rx.toast(
                "Por favor, ingrese un nombre y precio válidos para el servicio.",
                duration=3000,
            )
        new_service = Service(
            id=str(uuid.uuid4()),
            name=service_name,
            price=service_price,
        )
        add_service_db(new_service)
        yield BarberState.load_data()

    @rx.event
    def delete_service(self, service_id: str):
        delete_service_db(service_id)
        yield BarberState.load_data()

    @rx.event
    def open_edit_service_dialog(self, service: Service):
        self.editing_item_id = service["id"]
        self.editing_item_name = service["name"]
        self.editing_item_price = service["price"]
        self.show_edit_service_dialog = True

    @rx.event
    def save_service_edit(self, form_data: dict):
        new_name = form_data.get("name", "").strip()
        try:
            price_str = form_data.get("price", "0")
            new_price = int(price_str) if price_str else 0
        except (ValueError, TypeError):
            new_price = 0
        if not new_name or new_price <= 0:
            return rx.toast(
                "Por favor, ingrese un nombre y precio válidos para el servicio.",
                duration=3000,
            )
        update_service_db(
            self.editing_item_id, new_name, new_price
        )
        self.show_edit_service_dialog = False
        yield BarberState.load_data()

    @rx.event
    def select_date(self, date_str: str):
        self.selected_date = date_str
        self.selected_time = ""
        self.selected_barber = ""

    @rx.event
    def select_barber(self, barber: str):
        self.selected_barber = barber
        self.selected_time = ""

    @rx.event
    def select_time(self, time_str: str):
        self.selected_time = time_str

    @rx.event
    def change_month(self, delta: int):
        current_year, current_month = (
            self.display_month_date.year,
            self.display_month_date.month,
        )
        new_month = current_month + delta
        new_year = current_year
        if new_month > 12:
            new_month = 1
            new_year += 1
        elif new_month < 1:
            new_month = 12
            new_year -= 1
        self.display_month_date = (
            self.display_month_date.replace(
                year=new_year, month=new_month, day=1
            )
        )

    @rx.event
    def prepare_appointment(self, form_data: dict):
        if not all(
            (
                form_data.get(k)
                for k in ["name", "phone", "service"]
            )
        ):
            return rx.toast(
                "Por favor, complete todos los campos.",
                duration=3000,
            )
        self.pending_appointment_data = form_data
        self.show_confirm_dialog = True

    @rx.event
    def confirm_appointment(self):
        if (
            not self.selected_date
            or not self.selected_time
            or (not self.selected_barber)
        ):
            return rx.toast(
                "Error: faltan detalles de la cita.",
                duration=3000,
            )
        new_appointment = Appointment(
            id=str(uuid.uuid4()),
            name=self.pending_appointment_data["name"],
            phone=self.pending_appointment_data["phone"],
            date=self.selected_date,
            time=self.selected_time,
            service=self.pending_appointment_data[
                "service"
            ],
            barber=self.selected_barber,
        )
        add_appointment_db(new_appointment)
        self.show_confirm_dialog = False
        self.pending_appointment_data = {}
        self.selected_date = ""
        self.selected_time = ""
        self.selected_barber = ""
        yield BarberState.load_data()
        return rx.toast(
            "Cita agendada con éxito!", duration=3000
        )

    @rx.event
    def cancel_confirmation(self):
        self.show_confirm_dialog = False
        self.pending_appointment_data = {}

    @rx.event
    def delete_appointment(self, appointment_id: str):
        delete_appointment_db(appointment_id)
        yield BarberState.load_data()

    @rx.event
    def set_filter_name(self, name: str):
        self.filter_name = name

    @rx.event
    def set_filter_phone(self, phone: str):
        self.filter_phone = phone

    @rx.event
    def set_filter_service(self, service: str):
        self.filter_service = service

    @rx.event
    def set_filter_date(self, date: str):
        self.filter_date = date

    @rx.event
    def clear_filters(self):
        self.filter_name = ""
        self.filter_phone = ""
        self.filter_service = ""
        self.filter_date = ""

    # --- Availability Management Events ---

    @rx.event
    def handle_availability_barber_change(self, barber_id: str):
        self.availability_selected_barber_id = barber_id
        if self.availability_selected_date:
            self.availability_selected_times = get_availability_for_barber(
                barber_id, self.availability_selected_date
            )
        else:
            self.availability_selected_times = []

    @rx.event
    def handle_availability_date_change(self, date_str: str):
        self.availability_selected_date = date_str
        if self.availability_selected_barber_id:
            self.availability_selected_times = get_availability_for_barber(
                self.availability_selected_barber_id, date_str
            )

    @rx.event
    def toggle_availability_time(self, time: str):
        if time in self.availability_selected_times:
            self.availability_selected_times.remove(time)
        else:
            self.availability_selected_times.append(time)
            self.availability_selected_times.sort()

    @rx.event
    def save_availability(self):
        if not self.availability_selected_barber_id or not self.availability_selected_date:
            return rx.toast("Seleccione un barbero y una fecha.", duration=3000)
        
        set_availability_for_barber(
            self.availability_selected_barber_id,
            self.availability_selected_date,
            self.availability_selected_times,
        )
        # Refresh the globally available dates after saving
        self.globally_available_dates = get_all_available_dates()
        return rx.toast("Disponibilidad guardada con éxito.", duration=3000)

    # --- Computed Vars ---

    @rx.var
    def barber_names(self) -> list[str]:
        return [barber["name"] for barber in self.barbers]

    @rx.var
    def sorted_appointments(self) -> list[Appointment]:
        if not self.appointments:
            return []
        return sorted(
            self.appointments,
            key=lambda app: (
                datetime.datetime.strptime(
                    app["date"], "%Y-%m-%d"
                ).date(),
                datetime.datetime.strptime(
                    app["time"], "%H:%M"
                ).time(),
            ),
        )

    @rx.var
    def filtered_appointments(self) -> list[Appointment]:
        appointments = self.sorted_appointments
        if self.filter_name:
            appointments = [
                app
                for app in appointments
                if self.filter_name.lower()
                in app["name"].lower()
            ]
        if self.filter_phone:
            appointments = [
                app
                for app in appointments
                if self.filter_phone in app["phone"]
            ]
        if self.filter_service:
            appointments = [
                app
                for app in appointments
                if app["service"] == self.filter_service
            ]
        if self.filter_date:
            appointments = [
                app
                for app in appointments
                if app["date"] == self.filter_date
            ]
        return appointments

    @rx.var
    def display_month_str(self) -> str:
        month_index = self.display_month_date.month - 1
        return f"{self.spanish_months[month_index]} {self.display_month_date.year}"

    @rx.var
    def calendar_weeks(self) -> list[list[dict]]:
        cal = calendar.Calendar(firstweekday=0)
        month_days = cal.monthdayscalendar(
            self.display_month_date.year,
            self.display_month_date.month,
        )
        weeks = []
        today = datetime.date.today()
        for week in month_days:
            week_data = []
            for day in week:
                if day == 0:
                    week_data.append({"is_in_month": False})
                    continue
                date_obj = datetime.date(
                    self.display_month_date.year,
                    self.display_month_date.month,
                    day,
                )
                date_str = date_obj.strftime("%Y-%m-%d")
                
                # A day is disabled if it's in the past OR if it's not in the list of globally available dates.
                is_past = date_obj < today
                is_available = date_str in self.globally_available_dates
                is_disabled = is_past or not is_available

                week_data.append(
                    {
                        "day": day,
                        "is_in_month": True,
                        "is_today": date_obj == today,
                        "is_selected": date_str
                        == self.selected_date,
                        "date_str": date_str,
                        "is_disabled": is_disabled,
                    }
                )
            weeks.append(week_data)
        return weeks

    @rx.var
    def admin_calendar_weeks(self) -> list[list[dict]]:
        """Generates calendar weeks specifically for the admin availability panel."""
        cal = calendar.Calendar(firstweekday=0)
        month_days = cal.monthdayscalendar(
            self.display_month_date.year,
            self.display_month_date.month,
        )
        weeks = []
        today = datetime.date.today()
        for week in month_days:
            week_data = []
            for day in week:
                if day == 0:
                    week_data.append({"is_in_month": False})
                    continue
                date_obj = datetime.date(
                    self.display_month_date.year,
                    self.display_month_date.month,
                    day,
                )
                date_str = date_obj.strftime("%Y-%m-%d")
                
                # For the admin panel, a day is only disabled if it's in the past.
                is_disabled = date_obj < today

                week_data.append(
                    {
                        "day": day,
                        "is_in_month": True,
                        "is_today": date_obj == today,
                        "is_selected": date_str == self.availability_selected_date,
                        "date_str": date_str,
                        "is_disabled": is_disabled,
                    }
                )
            weeks.append(week_data)
        return weeks

    @rx.var
    def available_times_for_selected_date_and_barber(
        self,
    ) -> list[str]:
        if not self.selected_date or not self.selected_barber:
            return []

        # Find the barber's ID from their name
        barber_id = None
        for b in self.barbers:
            if b["name"] == self.selected_barber:
                barber_id = b["id"]
                break
        if not barber_id:
            return []

        try:
            selected_date_obj = datetime.datetime.strptime(
                self.selected_date, "%Y-%m-%d"
            ).date()
        except ValueError:
            return []

        # 1. Get explicitly available times from the database
        available_times = get_availability_for_barber(barber_id, self.selected_date)
        
        # 2. Get times that are already booked
        booked_times = {
            app["time"]
            for app in self.appointments
            if app["date"] == self.selected_date
            and app["barber"] == self.selected_barber
        }

        # 3. Filter out booked times
        final_times = [t for t in available_times if t not in booked_times]

        # 4. If it's today, filter out past times
        if selected_date_obj == datetime.date.today():
            now = datetime.datetime.now().time()
            final_times = [
                t
                for t in final_times
                if datetime.datetime.strptime(t, "%H:%M").time() > now
            ]
        
        return final_times
