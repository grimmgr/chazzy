const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtSchema = new Schema({
    embed_link: String,
    verified: Boolean,
    submitted: Date
});

const Art = mongoose.model('Art', ArtSchema);

module.exports = Art;