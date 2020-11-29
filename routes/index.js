const passport = require('passport');
const path = require('path');
const axios = require('axios');
const router = require('express').Router();
const apiRoutes = require('./api');

router.post('/tehe', passport.authenticate('local'), (req, res) => 
    res.json(req.body));

router.post('/subscribe', (req, res) => {
    axios.post('https://us7.api.mailchimp.com/3.0/lists/3cc5a7c1c0/members', req.body, {
        headers: {
            'Authorization': 'Basic 64e00b0fc6345847583eb3ff01ba36d2-us7'
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