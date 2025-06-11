FROM python:3.12.9-slim

ENV PYTHONUNBUFFERED=1
WORKDIR /app

# Instalar dependencias mínimas del sistema
RUN apt-get update && apt-get install -y \
    gcc \
    g++ \
    unzip \
    curl \
    && rm -rf /var/lib/apt/lists/* \
    && pip install --upgrade pip

# Instalar Node.js usando el script oficial (versión LTS)
RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - \
    && apt-get install -y nodejs

COPY ./requirements.txt ./
RUN pip install -r requirements.txt

COPY ./ ./

# Exponer el puerto que Railway asignará
EXPOSE $PORT

CMD ["sh", "entrypoint.sh"]