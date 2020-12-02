const router = require('express').Router();
const fanArtRoutes = require('./fanArt');
const axios = require('axios');
require('dotenv').config();

router.use('/fan-art', fanArtRoutes);

router.get('/ig/:post', (req, res) => {
    const igToken = process.env.IG_TOKEN;
    const post = req.params.post;
    axios.get(`https://graph.facebook.com/v9.0/instagram_oembed?url=https://www.instagram.com/p/${post}/&omitscript=true&hidecaption=true&access_token=${igToken}`)
    .then(response => {
        const igInfo = {
            author: response.data.author_name,
            cdn: response.data.thumbnail_url
        }
        res.json(igInfo);
    })
    .catch(err => res.json(err));
});

router.get('/tour', (req, res) => {
    const bandsApiKey = process.env.BANDS_API_KEY;
    axios.get(`https://rest.bandsintown.com/v4/artists/chastitybelt/events/?date=past&app_id=${bandsApiKey}`)
    .then(response => {
        res.json(response.data);
    })
    .catch(err => res.status(404).json(err));
})

module.exports = router;