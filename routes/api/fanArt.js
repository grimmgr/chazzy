const router = require('express').Router();
const fanArtController = require('../../controllers/fanArtController');

router.route('/')
    .get(fanArtController.findAll)
    .post(fanArtController.create);

router.route('/:id')
    .delete(fanArtController.remove);

module.exports = router;