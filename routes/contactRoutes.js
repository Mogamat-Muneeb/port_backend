const express = require('express');
const nodemailer = require('nodemailer');

const app = express.Router();

app.post('/', (req, res) => {
    let {name,email,contact,message} = req.body;
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'davimuneeb785@gmail.com',
          pass: 'tjnnvgtencxsemvq',
        }
      });
      
      const mailOptions = {
        from: email,
        to: 'davimuneeb785@gmail.com',
        subject:`new contact from portfolio`,
        text:`${name} has contacted you
            contact them back on   ${contact} 
              ${message}`,
      };
      
      transporter.sendMail(mailOptions,(error, info) => {
        if (error) {
            res.status(400).send({msg: 'email not sent'});
        } else {
            res.send({msg: 'email sent'});
        }
      });
})


module.exports = app