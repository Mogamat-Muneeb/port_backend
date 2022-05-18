const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express.Router();

app.post('/', (req, res) => {
    let {name,email,contact,message} = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL,
          pass: process.env.PASS,
        },

      });
      
      const mailOptions = {
        from: email,
        to: 'davimuneeb785@gmail.com',
        subject:`new contact from portfolio`,
        text:`${name} has contacted you contact them back on ${contact} ${message}`,
      };
      
      transporter.sendMail(mailOptions,(error, info) => {
        if (error) {
            res.status(400).send({msg: 'email not sent ' + error});
        } else {
            res.send({msg: 'Your email has been submitted successfully.'});
        }
      });
})


module.exports = app