
# Chentes Barber - Agenda de Citas

Este proyecto es una aplicación web para agendar citas en una barbería, desarrollada con el framework [Reflex](https://reflex.dev/) de Python. La aplicación permite a los clientes ver la disponibilidad, seleccionar servicios, barberos y reservar una cita. También incluye un panel de administración protegido para gestionar barberos, servicios y citas.

## 🎥 Video Demostración

Haz clic en la siguiente imagen para ver una demostración completa de la aplicación en YouTube.

<a href="https://youtu.be/9fqmLlZ0zAg" target="_blank" title="Haz clic para ver el video en YouTube">
  <img src="https://img.youtube.com/vi/9fqmLlZ0zAg/hqdefault.jpg" alt="Demostración de la Agenda de Citas en YouTube" style="max-width: 600px; border: 1px solid #ddd; border-radius: 4px; padding: 5px;">
</a>

<p align="center">
  <strong>O visita el enlace directo:</strong> <a href="https://youtu.be/9fqmLlZ0zAg">https://youtu.be/9fqmLlZ0zAg</a>
</p>

## ✨ Características Principales

- **Agendamiento de Citas**: Formulario intuitivo para que los clientes seleccionen fecha, hora, barbero y servicio.
- **Disponibilidad en Tiempo Real**: El sistema solo muestra los horarios disponibles, evitando dobles reservas.
- **Panel de Administración**: Una vista segura (`/admin`) para que los administradores puedan:
    - Ver y eliminar citas agendadas.
    - Añadir, editar y eliminar barberos.
    - Añadir, editar y eliminar los servicios ofrecidos.
    - Gestionar la disponibilidad de los barberos.
- **Diseño Responsivo**: Interfaz limpia y moderna construida con [TailwindCSS](https://tailwindcss.com/).
- **Contenerización**: Listo para desplegarse fácilmente usando [Docker](https://www.docker.com/) y [Caddy](https://caddyserver.com/) como servidor web.

## 🛠️ Tecnologías Utilizadas

*   **Framework Principal:**
    *   ![Reflex](https://img.shields.io/badge/Reflex-0.7.14-5646ED?style=for-the-badge&logo=reflex&logoColor=white)
    *   ![Python](https://img.shields.io/badge/Python-3.13-3776AB?style=for-the-badge&logo=python&logoColor=white)
*   **Estilos:**
    *   ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
*   **Base de Datos:**
    *   ![SQLite](https://img.shields.io/badge/SQLite-003B57?style=for-the-badge&logo=sqlite&logoColor=white) (Desarrollo)
    *   ![Redis](https://img.shields.io/badge/Redis-DC382D?style=for-the-badge&logo=redis&logoColor=white) (Producción)
*   **Despliegue:**
    *   ![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
    *   ![Caddy](https://img.shields.io/badge/Caddy-0055FF?style=for-the-badge&logo=caddy&logoColor=white)

## 🚀 Cómo Empezar

Sigue estas instrucciones para levantar el proyecto en tu entorno local.

### Prerrequisitos

- Python 3.11 o superior
- Node.js y npm (para las dependencias de TailwindCSS)
- (Opcional) Docker y Docker Compose para el despliegue en contenedor.

### Instalación Local

1.  **Clona el repositorio:**
    ```bash
    git clone https://github.com/tu-usuario/RF-Agenda-de-Citas.git
    cd RF-Agenda-de-Citas
    ```

2.  **Crea y activa un entorno virtual:**
    ```bash
    python -m venv .venv
    source .venv/bin/activate
    # En Windows: .venv\Scripts\activate
    ```

3.  **Instala las dependencias de Python:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Inicializa el proyecto Reflex:**
    Esto instalará las dependencias de `npm` necesarias para el frontend.
    ```bash
    reflex init
    ```

5.  **Ejecuta la aplicación:**
    ```bash
    reflex run
    ```

    La aplicación estará disponible en `http://localhost:3000`.

### Despliegue con Docker

El proyecto está configurado para un despliegue sencillo en un solo contenedor.

1.  **Construye la imagen de Docker:**
    ```bash
    docker build -t chentes-barber-app .
    ```

2.  **Ejecuta el contenedor:**
    ```bash
    docker run -p 8080:8080 chentes-barber-app
    ```
    La aplicación estará disponible en `http://localhost:8080`.

## 📂 Estructura del Proyecto

```
/
├── app/
│   ├── components/     # Componentes reutilizables de la UI (formularios, listas)
│   ├── pages/          # Vistas principales de la aplicación (login, admin)
│   ├── states/         # Lógica de estado y conexión con la BD
│   │   ├── auth_state.py # Manejo del estado de autenticación
│   │   ├── db_service.py # Lógica para interactuar con la base de datos SQLite
│   │   └── state.py      # Estado principal de la aplicación
│   └── app.py          # Archivo principal que define la app y las rutas
├── assets/             # Archivos estáticos (imágenes, CSS)
├── .dockerignore       # Archivos a ignorar por Docker
├── Caddyfile           # Configuración para el servidor web Caddy
├── Dockerfile          # Instrucciones para construir la imagen Docker
├── requirements.txt    # Dependencias de Python
└── rxconfig.py         # Configuración del proyecto Reflex
```

## 🔐 Acceso al Panel de Administrador

Para acceder al panel de administración, navega a `/login`. La lógica de autenticación actual en `auth_state.py` es básica y puede ser extendida según las necesidades de seguridad. Una vez autenticado, serás redirigido a `/admin`.
