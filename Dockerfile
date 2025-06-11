# Usar una imagen base con Python y Node.js
FROM python:3.12.9-slim

ENV PYTHONUNBUFFERED=1
WORKDIR /app

# Instalar dependencias del sistema incluyendo Caddy
RUN apt-get update && apt-get install -y \
    gcc \
    g++ \
    nodejs \
    npm \
    curl \
    debian-keyring \
    debian-archive-keyring \
    apt-transport-https \
    && curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' | gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg \
    && curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' | tee /etc/apt/sources.list.d/caddy-stable.list \
    && apt-get update \
    && apt-get install -y caddy \
    && rm -rf /var/lib/apt/lists/* \
    && pip install --upgrade pip

# Copiar requirements y instalar dependencias de Python
COPY ./requirements.txt ./
RUN pip install -r requirements.txt

# Copiar el código de la aplicación
COPY ./ ./

# Exportar el frontend estático
RUN reflex export --frontend-only --no-zip

# Copiar la configuración de Caddy
COPY Caddyfile /etc/caddy/Caddyfile

# Exponer el puerto 3000
EXPOSE 3000

# Usar el script de inicio
COPY entrypoint.sh ./
RUN chmod +x entrypoint.sh

CMD ["./entrypoint.sh"]