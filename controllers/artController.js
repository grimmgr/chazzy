const db = require('../models');
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
require('dotenv').config();

const oAuth2Client = new google.auth.OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });

async function sendMail(mailOptions) {

    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'beltchastity@gmail.com',
                clientId: process.env.CLIENT_ID,
                clientSecret: process.env.CLIENT_SECRET,
                refreshToken: process.env.REFRESH_TOKEN,
                accessToken: accessToken
            }
        });

        const result = await transporter.sendMail(mailOptions);
        return result;

    } catch(error) {
        return error
    }

}

const submissionAlert = {
    from: 'beltchastity@gmail.com',
    to: 'beltchastity@gmail.com',
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
            sendMail(submissionAlert)
            .then(result => console.log('email sent', result))
            .catch(err => console.log(err.message));
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
                from: 'Chastity Belt <beltchastity@gmail.com>',
                to: req.body.email,
                subject: 'Your Art Has Been Posted!',
                text: 'We\'ve added your art to our site! Thanks so much for sharing it with us.  <3 chazzy',
                html: '<p>We\'ve added your art to our site! Thanks so much for sharing it with us. <br/> <a href="https://www.chastitybeltmusic.com/">click to see it ;)</a> <br/> <3 chazzy</p>'
            };
            sendMail(postAlert)
                .then(result => console.log('email sent', result))
                .catch(err => console.log(err.message));
            res.json(dbArt);
        })
        .catch(err => res.status(422).json(err));
    }
};