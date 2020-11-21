const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.FanArt.find(req.query)
        .sort({ date: -1 })
        .then(dbArt => res.json(dbArt))
        .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.FanArt.create(req.body)
        .then(dbArt => res.json(dbArt))
        .catch(err => res.status(422).json(err))
    },
    remove: (req, res) => {
        db.Book.findById({ _id: req.params.id })
        .then(dbArt => dbArt.remove())
        .then(dbArt => res.json(dbArt))
        .catch(err => res.status(422).json(err));
    }
};