const router = require('express').Router();
const fanArtRoutes = require('./fanArt');

router.use('/fan-art', fanArtRoutes);

module.exports = router;