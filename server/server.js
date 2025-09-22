const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
  const { nombre, email, telefono, web, direccionWeb, redes, tipoWeb, mantenimiento, mensaje } = req.body;

  // Configura tu email
  const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',  // servidor SMTP de Hotmail/Outlook
  port: 587,                    // puerto estándar STARTTLS
  secure: false,                // false porque 587 usa STARTTLS
  auth: {
    user: 'pendientintin@hotmail.com', // tu cuenta Hotmail
    pass: 'J6HTA-5H6VN-CNWPQ-B6HNP-5V2DB'         // tu contraseña de Hotmail
  }
});

  try {
    await transporter.sendMail({
      from: "pendientintin@hotmail.com",
      to: 'pendientintin@hotmail.com',
      subject: 'Nuevo formulario de contacto',
      text: `
        Nombre: ${nombre}
        Teléfono: ${telefono}
        Email: ${email}
        Web: ${web} ${direccionWeb ? `(${direccionWeb})` : ''}
        Redes: ${redes.join(', ')}
        Tipo de web: ${tipoWeb}
        Mantenimiento: ${mantenimiento}
        Mensaje: ${mensaje}
      `
    });
    res.send({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).send({ ok: false, error: err.message });
  }
});

app.listen(5000, () => console.log('Servidor escuchando en http://localhost:5000'));