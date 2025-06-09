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


def get_db_path() -> str:
    """Returns the path to the database file."""
    return "app/states/app.db"


def get_db_connection() -> sqlite3.Connection:
    """Establishes a connection to the SQLite database."""
    db_path = get_db_path()
    os.makedirs(os.path.dirname(db_path), exist_ok=True)
    conn = sqlite3.connect(db_path)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    """Initializes the database and creates the 'appointments' table if it doesn't exist."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "\n        CREATE TABLE IF NOT EXISTS appointments (\n            id TEXT PRIMARY KEY,\n            name TEXT NOT NULL,\n            phone TEXT NOT NULL,\n            date TEXT NOT NULL,\n            time TEXT NOT NULL,\n            service TEXT NOT NULL,\n            barber TEXT NOT NULL\n        )\n        "
    )
    conn.commit()
    conn.close()


def get_all_appointments() -> list[Appointment]:
    """Fetches all appointments from the database."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM appointments")
    rows = cursor.fetchall()
    conn.close()
    return [Appointment(**dict(row)) for row in rows]


def add_appointment_db(appointment: Appointment):
    """Adds a new appointment to the database."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "\n        INSERT INTO appointments (id, name, phone, date, time, service, barber)\n        VALUES (?, ?, ?, ?, ?, ?, ?)\n        ",
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
    """Deletes an appointment from the database by its ID."""
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "DELETE FROM appointments WHERE id = ?",
        (appointment_id,),
    )
    conn.commit()
    conn.close()