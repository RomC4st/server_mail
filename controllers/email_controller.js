const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
const fetch = require('node-fetch');

router.post('/', (req, res) => {

  const body = { ...req.body }
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET}&response=${body.value}`

  fetch(url)
    .then(res => res.json())
    .then(response => {
      if (response.success === true) {
        const transporter = nodemailer.createTransport({
          service: process.env.SERV,
          auth: {
            user: process.env._USER,
            pass: process.env._PASS
          }
        });

        const mailOptions = {
          from: body.email,
          to: process.env._USER,
          subject: `Prise de contact de ${body.name}`,
          html: `<!DOCTYPE html><body><p>${body.message}</p></body></html>`,
        };
        transporter.sendMail(mailOptions, (err, info) => {
          err ? res.sendStatus(404) : res.sendStatus(200);
        })
      }
      else {
        res.sendStatus(400)
      }
    })
    .catch = (err) => {
      res.sendStatus(500)
    }
})

module.exports = router
