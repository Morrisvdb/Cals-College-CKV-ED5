from __init__ import db, app


class AsciiArt(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    line_nr = db.Column(db.Integer)
    line = db.Column(db.String(1000))


with app.app_context():
    db.create_all()