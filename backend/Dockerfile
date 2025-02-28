# Use uma imagem base leve do Python
FROM python:3.10-slim

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copia os arquivos de dependências
COPY requirements.txt .

# Instala as dependências
RUN pip install --no-cache-dir -r requirements.txt

# Copia o código-fonte do backend para o contêiner
COPY ./app ./app
COPY alembic.ini alembic.ini
COPY wait-for-it.sh /wait-for-it.sh

ENTRYPOINT ["/wait-for-it.sh", "db:5432", "--"]

# Expõe a porta onde a API será executada
EXPOSE 8000

# Comando para iniciar o servidor
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]