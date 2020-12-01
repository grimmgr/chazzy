const router = require('express').Router();
const fanArtRoutes = require('./fanArt');
const axios = require('axios');
require('dotenv').config();

router.use('/fan-art', fanArtRoutes);

router.get('/ig/:post', (req, res) => {
    // const igToken = process.env.IG_TOKEN;
    const post = req.params.post;
    axios.get(`https://graph.facebook.com/v9.0/instagram_oembed?url=https://www.instagram.com/p/${post}/&omitscript=true&hidecaption=true&access_token=204761497824117|swYmFWa5sv52UWrzf2p-3z9kktw`)
    .then(response => {
        const igInfo = {
            author: response.data.author_name,
            cdn: response.data.thumbnail_url
        }
        res.json(igInfo);
    })
    .catch(err => res.json(err));
})

module.exports = router;