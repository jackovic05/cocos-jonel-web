from flask import Flask, render_template, request, redirect, url_for
from email.message import EmailMessage
import smtplib
import os

# smtplib constants, defined as environment variables
MY_EMAIL = os.environ.get("MY_EMAIL")
MY_APP_PASSWORD = os.environ.get("GMAIL_SPECIFIC_PASSWORD")
COCOS_EMAIL = os.environ.get("COCOS_EMAIL")

print(COCOS_EMAIL)

app = Flask(__name__)

@app.route("/", methods=["GET", "POST"])
def inicio():
    if request.method == "POST":
        data = request.form
        # print(data)

        msg = EmailMessage()
        msg["Subject"] = "!Mensaje de la web de Cocos Jonel!🌐"
        msg["From"] = MY_EMAIL
        msg["To"] = COCOS_EMAIL

        msg.set_content(f"""
        Nombre: {data['nombre']}
        Correo: {data['correo']}
        Teléfono: {data['telefono']}
        Mensaje: {data['mensaje']}
        """, charset="utf-8")

        print(msg)

        # Sending the email
        with smtplib.SMTP("smtp.gmail.com", 587) as connection:
            connection.starttls()
            connection.login(MY_EMAIL, MY_APP_PASSWORD)
            connection.send_message(msg)

        return redirect(url_for('inicio', sent='true') + "#contactanos")
    sent = request.args.get('sent') == 'true'
    return render_template("inicio.html", sent=sent)


if __name__ == "__main__":
    app.run(debug=True, port=5001)
