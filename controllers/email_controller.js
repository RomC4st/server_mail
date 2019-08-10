const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');
const fetch = require('node-fetch');

router.post('/', (req, res) => {

  const recipient = req.body.email
  const message = req.body.message
  const name = req.body.name
  const value = req.body.value
  const url =`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.SECRET}&response=${value}`
  
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
          from: recipient,
          to: process.env._USER,
          subject: `Prise de contact de ${name}`,
          html: `<!DOCTYPE html><body><p>${message}</p></body></html>`,
        };


        transporter.sendMail(mailOptions, (err, info) => {
          err ? res.sendStatus(404) : res.sendStatus(200);
        })
      }
      else{
        res.sendStatus(400)
      }
    })
    .catch=(err)=>{
      res.sendStatus(500)
    }


})

module.exports = router