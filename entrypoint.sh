#!/bin/bash
set -e

# Configurar la ruta de la base de datos para que use el directorio persistente
export DATABASE_PATH=/app/data/appointments.db

# Inicializar la aplicación Reflex
reflex init

# Construir la aplicación
reflex run --env prod