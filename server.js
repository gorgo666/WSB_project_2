/** @format */

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const app = express();

// express app config
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('my-app/build'));
  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'my-app', 'build', 'index.html'))
  );
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/form', (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `
      <h3>Contact Details</h3>
      <ul>
      <li>Name: ${req.body.firstName}</li>
      <li>Email: ${req.body.email}</li>
     
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
      `;

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smpt.gmail.email',
      port: 587,
      auth: {
        user: 'grzegorz.wiecek.sluzbowy@gmail.com',
        pass: 'Cadaveria1666',
      },
    });

    let mailOption = {
      from: 'gorgo1666@gmail.com',
      to: 'grzegorz.wiecek.sluzbowy@gmail.com',
      replyTo: req.body.email,
      subject: 'Nowa wiadomość',
      text: req.body.message,
      html: htmlEmail,
    };

    transporter.sendMail(mailOption, (err, info) => {
      if (err) {
        return console.log(err);
      }

      console.log('wiadomosc wysłane; %s', info.message);
      console.log('URL: %s', nodemailer.getTestMessageUrl(info));
    });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(PORT);
});
