const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtSchema = new Schema({
    embed_link: String
});

const Art = mongoose.model('Art', ArtSchema);

module.exports = Art;