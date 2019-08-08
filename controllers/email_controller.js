const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');

router.post('/', (req, res) => {
  const recipient = req.body.email
  const message = req.body.message
  const name = req.body.name
  const transporter = nodemailer.createTransport({
    service: process.env.SERV,
    auth: {
      user: process.env._USER,
      pass: process.env._PASS
    }
  });

  const mailOptions = {
    from: recipient,
    to: process.env._USER,
    subject: `Prise de contact de ${name}`,
    html: `<!DOCTYPE html><body><p>${message}</p></body></html>`,
  };


  transporter.sendMail(mailOptions, (err, info) => {
    err ? res.sendStatus(404) : res.sendStatus(200);
  })
})

module.exports = router