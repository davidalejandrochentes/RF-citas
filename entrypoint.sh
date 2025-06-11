#!/bin/bash

# Configurar la ruta de la base de datos para que use el directorio persistente
export DATABASE_PATH=/app/data/appointments.db

# Iniciar la aplicación Reflex
reflex run --env prod