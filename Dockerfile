FROM python:3.12.9-alpine3.21

ENV PYTHONUNBUFFERED=1
WORKDIR /app

# Instalar Node.js y npm además de las dependencias de Python
RUN apk update \
 && apk add --no-cache gcc musl-dev python3-dev libffi-dev nodejs npm \
 && pip install --upgrade pip

COPY ./requirements.txt ./
RUN pip install -r requirements.txt

COPY ./ ./

# Inicializar Reflex (esto instalará las dependencias de Node.js)
RUN reflex init --skip-reflex-init

CMD ["sh", "entrypoint.sh"]