const router = require('express').Router();
const artController = require('../../controllers/artController');

router.route('/')
    .get(artController.findAll)
    .post(artController.create);

router.route('/:id')
    .delete(artController.remove)
    .put(artController.update);

module.exports = router;