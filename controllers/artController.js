const db = require('../models');
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    }
});

const submissionAlert = {
    from: process.env.EMAIL,
    to: 'ggrimm33@gmail.com',
    subject: 'New Fan Art',
    text: 'New fan art has been submitted!',
    html: '<p>New fan art has been submitted! <a href="https://www.chastitybeltmusic.com/">Go to site</a></p>'
};

module.exports = {
    findAll: (req, res) => {
        db.Art.find(req.query)
        .sort({ submitted: -1 })
        .then(dbArt => res.json(dbArt))
        .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.Art.create(req.body)
        .then(dbArt => {
            transporter.sendMail(submissionAlert, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('email sent');
                }
            });
            res.json(dbArt)
        })
        .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        db.Art.findById({ _id: req.params.id })
        .then(dbArt => dbArt.remove())
        .then(dbArt => res.json(dbArt))
        .catch(err => res.status(422).json(err));
    },
    update: (req, res) => {
        db.Art.findOneAndUpdate({ _id: req.params.id }, { verified: true })
        .then(dbArt => {
            const postAlert = {
                from: process.env.EMAIL,
                to: req.body.email,
                subject: 'Your Art Has Been Posted!',
                text: 'We\'ve added your art to our site! Thanks so much for sharing it with us.  <3 chazzy',
                html: '<p>We\'ve added your art to our site! Thanks so much for sharing it with us. <br/> <a href="https://www.chastitybeltmusic.com/">click to see it ;)</a> <br/> <3 chazzy</p>'
            };
            transporter.sendMail(postAlert, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('email sent');
                }
            });
            res.json(dbArt);
        })
        .catch(err => res.status(422).json(err));
    }
};