const passport = require('passport');
const path = require('path');
const axios = require('axios');
const router = require('express').Router();
const apiRoutes = require('./api');
require('dotenv').config;

router.post('/tehe', passport.authenticate('local'), (req, res) => 
    res.json(req.body));

router.post('/subscribe', (req, res) => {
    const listId = process.env.MC_AUD_ID;
    const mcApiKey = process.env.MC_API_KEY;
    axios.post(`https://us7.api.mailchimp.com/3.0/lists/${listId}/members`, req.body, {
        headers: {
            'Authorization': `Basic ${mcApiKey}`
        }
    })
    .then(response => {
        res.json(response.data)
    })
    .catch(err => {
        res.json(err.response.data)
    });
});

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;