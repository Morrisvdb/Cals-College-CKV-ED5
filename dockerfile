FROM faucet/python3

WORKDIR /app

EXPOSE 5000

COPY . /app

RUN pip install -r requirements.txt

CMD ["python", "app.py"]

