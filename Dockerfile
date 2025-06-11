FROM python:3.12.9-slim

ENV PYTHONUNBUFFERED=1
WORKDIR /app

# Instalar dependencias del sistema (incluyendo unzip)
RUN apt-get update && apt-get install -y \
    gcc \
    g++ \
    nodejs \
    npm \
    unzip \
    curl \
    && rm -rf /var/lib/apt/lists/* \
    && pip install --upgrade pip

# Instalar una versión específica de Node.js si es necesario para Tailwind
RUN npm install -g npm@latest

COPY ./requirements.txt ./
RUN pip install -r requirements.txt

COPY ./ ./

# Pre-instalar dependencias de frontend (incluyendo Tailwind)
RUN reflex init --loglevel debug || true

# Exponer el puerto que Railway asignará
EXPOSE $PORT

CMD ["sh", "entrypoint.sh"]