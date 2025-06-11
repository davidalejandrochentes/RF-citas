import reflex as rx
import sqlite3
import os
from typing import TypedDict


class Appointment(TypedDict):
    id: str
    name: str
    phone: str
    date: str
    time: str
    service: str
    barber: str


class Barber(TypedDict):
    id: str
    name: str


class Service(TypedDict):
    id: str
    name: str
    price: int


def get_db_path() -> str:
    return "app/states/app.db"


def get_db_connection() -> sqlite3.Connection:
    """Establishes a connection to the SQLite database."""
    db_path = get_db_path()
    os.makedirs(os.path.dirname(db_path), exist_ok=True)
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    """Initializes the database and creates tables if they don't exist."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "\n        CREATE TABLE IF NOT EXISTS appointments (\n            id TEXT PRIMARY KEY,\n            name TEXT NOT NULL,\n            phone TEXT NOT NULL,\n            date TEXT NOT NULL,\n            time TEXT NOT NULL,\n            service TEXT NOT NULL,\n            barber TEXT NOT NULL\n        )\n        "
    )
    cursor.execute(
        "\n        CREATE TABLE IF NOT EXISTS barbers (\n            id TEXT PRIMARY KEY,\n            name TEXT NOT NULL UNIQUE\n        )\n        "
    )
    cursor.execute(
        "\n        CREATE TABLE IF NOT EXISTS services (\n            id TEXT PRIMARY KEY,\n            name TEXT NOT NULL UNIQUE,\n            price INTEGER NOT NULL\n        )\n        "
    )
    conn.commit()
    conn.close()


def get_all_appointments() -> list[Appointment]:
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM appointments")
    rows = cursor.fetchall()
    conn.close()
    return [Appointment(**dict(row)) for row in rows]


def add_appointment_db(appointment: Appointment):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO appointments (id, name, phone, date, time, service, barber) VALUES (?, ?, ?, ?, ?, ?, ?)",
        (
            appointment["id"],
            appointment["name"],
            appointment["phone"],
            appointment["date"],
            appointment["time"],
            appointment["service"],
            appointment["barber"],
        ),
    )
    conn.commit()
    conn.close()


def delete_appointment_db(appointment_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "DELETE FROM appointments WHERE id = ?",
        (appointment_id,),
    )
    conn.commit()
    conn.close()


def get_all_barbers() -> list[Barber]:
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM barbers ORDER BY name")
    rows = cursor.fetchall()
    conn.close()
    return [Barber(**dict(row)) for row in rows]


def add_barber_db(barber: Barber):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO barbers (id, name) VALUES (?, ?)",
        (barber["id"], barber["name"]),
    )
    conn.commit()
    conn.close()


def update_barber_db(barber_id: str, new_name: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "UPDATE barbers SET name = ? WHERE id = ?",
        (new_name, barber_id),
    )
    conn.commit()
    conn.close()


def delete_barber_db(barber_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "DELETE FROM barbers WHERE id = ?", (barber_id,)
    )
    conn.commit()
    conn.close()


def get_all_services() -> list[Service]:
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM services ORDER BY name")
    rows = cursor.fetchall()
    conn.close()
    return [Service(**dict(row)) for row in rows]


def add_service_db(service: Service):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "INSERT INTO services (id, name, price) VALUES (?, ?, ?)",
        (service["id"], service["name"], service["price"]),
    )
    conn.commit()
    conn.close()


def update_service_db(
    service_id: str, new_name: str, new_price: int
):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "UPDATE services SET name = ?, price = ? WHERE id = ?",
        (new_name, new_price, service_id),
    )
    conn.commit()
    conn.close()


def delete_service_db(service_id: str):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "DELETE FROM services WHERE id = ?", (service_id,)
    )
    conn.commit()
    conn.close()