from __init__ import db, app
from flask_login import UserMixin
from flask_bcrypt import generate_password_hash, check_password_hash


class AsciiArt(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    line_nr = db.Column(db.Integer)
    line = db.Column(db.String(1000))


with app.app_context():
    db.create_all()