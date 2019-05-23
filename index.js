const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const nodemailer = require('nodemailer');
require('dotenv').config()

app.use(cors());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user:  process.env.DB_USER,
    pass:  process.env.DB_PASS
  }
});

const mailOptions = {
  from: process.env.DB_USER,
  to: process.env.DB_RECIPIENT,
  subject: 'Sending Email using Node.js',
  html: '<!DOCTYPE html><body><p>Put your message here...</p></body></html>',
};

transporter.sendMail(mailOptions, (err, info) => {
  err ? console.log(err) : console.log('Email sent: ' + info.response + ' to ' + mailOptions.to);
});

app.listen(port, err => {
  err ? console.log(err) : console.log(`Server is listening on ${port}`);

});
