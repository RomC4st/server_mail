const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const email_controller = require('./controllers/email_controller')
const bodyParser = require("body-parser");
require('dotenv').config()


// const connection = require("./config/config.js");
// to connect database 

app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use('/email_contact', email_controller)
app.listen(port, err => {
  err ? console.log(err) : console.log(`Server is listening on ${port}`);
});
