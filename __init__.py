from flask import Flask, url_for
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)
basedir = os.environ.get('DATABASE_URI')
print(basedir)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///' + basedir + '/database.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.secret_key = "ajkj2h39/ASD1/'is:;,.12.2ksjod-wkjwjbsdbkfjhdslf_sdkjc31,4isadlf"

db = SQLAlchemy(app)
