const db = require('../models');
const nodemailer = require('nodemailer');
const { getMaxListeners } = require('../models/art');
require('dotenv').config();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
    }
});

let submissionAlert = {
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
        db.Art.findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbArt => res.json(dbArt))
        .catch(err => res.status(422).json(err));
    }
};