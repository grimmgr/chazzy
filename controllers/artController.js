const db = require('../models');

module.exports = {
    findAll: (req, res) => {
        db.Art.find(req.query)
        .sort({ submitted: -1 })
        .then(dbArt => res.json(dbArt))
        .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.Art.create(req.body)
        .then(dbArt => res.json(dbArt))
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