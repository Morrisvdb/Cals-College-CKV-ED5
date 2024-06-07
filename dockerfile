FROM faucet/python3

WORKDIR /app

COPY . /app

EXPOSE 5000

VOLUME [ "/data" ]

RUN pip install -r requirements.txt

CMD ["python", "app.py"]

