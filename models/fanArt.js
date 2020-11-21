const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fanArtSchema = new Schema({
    artist: String,
    email: String,
    embedLink: String,
    srcLink: String
});

const Book = mongoose.model('FanArt',fanArtSchema);

module.exports = Book;