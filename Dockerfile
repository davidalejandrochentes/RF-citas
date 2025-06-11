FROM python:3.12.9-slim
ENV PYTHONUNBUFFERED=1
WORKDIR /app
RUN apt-get update && apt-get install -y \
    gcc \
    g++ \
    nodejs \
    npm \
    curl \
    && rm -rf /var/lib/apt/lists/* \
    && pip install --upgrade pip
COPY ./requirements.txt ./
RUN pip install -r requirements.txt
COPY ./ ./
RUN chmod +x entrypoint.sh
EXPOSE $PORT
CMD ["sh", "entrypoint.sh"]