#!/bin/bash
set -e

# Configurar la ruta de la base de datos para que use el directorio persistente
export DATABASE_PATH=/app/data/appointments.db

# Crear directorio de datos si no existe
mkdir -p /app/data

# Inicializar la aplicación Reflex
reflex init

# Instalar dependencias de frontend
npm install

# Construir la aplicación
reflex run --env prod