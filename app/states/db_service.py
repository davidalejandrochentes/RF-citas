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
    return os.path.join(os.path.dirname(__file__), "app.db")


def get_db_connection() -> sqlite3.Connection:
    conn = sqlite3.connect(get_db_path())
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    if os.path.exists(get_db_path()):
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='appointments'"
        )
        if cursor.fetchone():
            conn.close()
            return
        conn.close()
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "\n        CREATE TABLE IF NOT EXISTS appointments (\n            id TEXT PRIMARY KEY,\n            name TEXT NOT NULL,\n            phone TEXT NOT NULL,\n            date TEXT NOT NULL,\n            time TEXT NOT NULL,\n            service TEXT NOT NULL,\n            barber TEXT NOT NULL\n        )\n    "
    )
    conn.commit()
    conn.close()


def get_all_appointments() -> list[Appointment]:
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM appointments")
    rows = cursor.fetchall()
    conn.close()
    return [Appointment(**row) for row in rows]


def add_appointment_db(appointment: Appointment):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute(
        "\n        INSERT INTO appointments (id, name, phone, date, time, service, barber)\n        VALUES (?, ?, ?, ?, ?, ?, ?)\n    ",
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