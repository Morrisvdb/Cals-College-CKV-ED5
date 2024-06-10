from __init__ import app

from flask import render_template, redirect, url_for

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
    
@app.route('/location')
def location():
    return render_template("location.html")

@app.route('/finish')
def completion():
    return render_template("finish.html")


if __name__ == "__main__":
    app.run(host='0.0.0.0', ssl_context=('ssl/cert.pem', 'ssl/key.pem'))