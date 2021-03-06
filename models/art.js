const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtSchema = new Schema({
    //cdn: String,
    post_ID: String,
    embed_link: String,
    email: String,
    // author: String,
    verified: Boolean,
    submitted: Date
});

const Art = mongoose.model('Art', ArtSchema);

module.exports = Art;