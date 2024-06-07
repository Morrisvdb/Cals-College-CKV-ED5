import os
# Other File Imports
from __init__ import app, db
from models import AsciiArt

from flask import render_template, redirect, url_for, request

@app.route('/')
def home():
    return render_template("home.html")

@app.route('/home')
def redirect_home():
    return redirect(url_for('home'))

@app.route('/tutorial')
def rulesandhelp():
    return render_template("rulesandhelp.html")

@app.route('/artwork/<int:id>', methods=['GET', 'POST'])
def artwork_display(id):
    if int(id) > 10:
        return redirect(url_for('completion'))
    
    # if request.method == 'POST' and id == 2:
    #     art = request.form['asciiArt']
    #     return jsonify({'asciiArt': art})
    
    return render_template(f"artwork{id}.html", id=id)

@app.route('/ascii/save', methods=['POST'])
def save_ascii():
    ascii_art = request.form.get('line')
    last_line_nr = db.session.query(AsciiArt).all()
    if last_line_nr:
        last_line_nr = db.session.query(AsciiArt).order_by(AsciiArt.line_nr.desc()).first().line_nr
        print(last_line_nr)
    else:
        last_line_nr = 0
    if ascii_art:
        new_line = AsciiArt(line_nr=last_line_nr + 1, line=ascii_art)
        db.session.add(new_line)
        db.session.commit()
        all_lines = db.session.query(AsciiArt).filter(AsciiArt.line_nr != 0).all()
        lines = ''
        return load_ascii()
    else:
        return 'No ASCII art found in request', 400
    
@app.route('/ascii/load', methods=['GET'])
def load_ascii():
    all_lines = db.session.query(AsciiArt).filter(AsciiArt.line_nr != 0).all()
    lines = ''
    for line in all_lines:
        lines += '<a hx-post="/ascii/delete/' + str(line.line_nr) + '" hx-target="#display">' + line.line +'</a>' + '<br>'
        # lines += line.line + '<br>'
    return lines
    
@app.route('/ascii/delete/<int:line_nr>', methods=['POST'])
def delete_ascii(line_nr):
    # line_nr = request.form.get('line_nr')
    if line_nr:
        line = db.session.query(AsciiArt).filter(AsciiArt.line_nr == line_nr).first()
        db.session.delete(line)
        db.session.commit()
        return load_ascii()
    else:
        return 'No line number found in request', 400
    
@app.route('/location')
def location():
    return render_template("location.html")

@app.route('/finish')
def completion():
    return render_template("finish.html")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)