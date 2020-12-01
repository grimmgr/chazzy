const nodemailer = require('nodemailer');
require('dotenv').config();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    }
});

let mailOptions = {
    from: process.env.EMAIL,
    to: 'ggrimm33@gmail.com',
    subject: 'wooooo',
    text: 'la di daaaaa',
    html: '<p>A new fan art submission has been posted! <a href="https://www.chastitybeltmusic.com/">Go to site</a></p>'
};

transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log('email sent');
    }

});