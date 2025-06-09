import reflex as rx
from typing import TypedDict
import datetime
import calendar
import uuid
from app.states.db_service import (
    Appointment,
    get_all_appointments,
    add_appointment_db,
    delete_appointment_db,
    init_db,
)


class BarberState(rx.State):
    appointments: list[Appointment] = []
    barbers: list[str] = ["Frank", "Joe", "Mike"]
    services: dict[str, int] = {
        "Corte de Pelo": 20,
        "Afeitado": 15,
        "Corte y Afeitado": 30,
    }
    all_possible_times: list[str] = [
        "09:00",
        "09:30",
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
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

    @rx.event
    def load_appointments(self):
        init_db()
        self.appointments = get_all_appointments()

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
        yield BarberState.load_appointments()
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
        yield BarberState.load_appointments()

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
                is_disabled = date_obj < today
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
    def available_times_for_selected_date_and_barber(
        self,
    ) -> list[str]:
        if (
            not self.selected_date
            or not self.selected_barber
        ):
            return []
        try:
            selected_date_obj = datetime.datetime.strptime(
                self.selected_date, "%Y-%m-%d"
            ).date()
        except ValueError:
            return []
        booked_times = {
            app["time"]
            for app in self.appointments
            if app["date"] == self.selected_date
            and app["barber"] == self.selected_barber
        }
        if selected_date_obj == datetime.date.today():
            now = datetime.datetime.now().time()
            future_times = [
                t
                for t in self.all_possible_times
                if datetime.datetime.strptime(
                    t, "%H:%M"
                ).time()
                > now
            ]
            return [
                time
                for time in future_times
                if time not in booked_times
            ]
        elif selected_date_obj < datetime.date.today():
            return []
        return [
            time
            for time in self.all_possible_times
            if time not in booked_times
        ]