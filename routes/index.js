const passport = require('passport');
const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

router.post('/tehe', passport.authenticate('local'), (req, res) => 
    res.json(req.body));

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;