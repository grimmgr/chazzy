const router = require('express').Router();
const fanArtRoutes = require('./fanArt');

router.use('/fanArt', fanArtRoutes);

module.exports = router;