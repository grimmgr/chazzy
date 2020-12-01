const router = require('express').Router();
const fanArtRoutes = require('./fanArt');
const axios = require('axios');
require('dotenv').config();

router.use('/fan-art', fanArtRoutes);

router.get('/ig/:post', (req, res) => {
    console.log('get ig info!');
    const igToken = process.env.IG_TOKEN;
    const post = req.params.post;
    console.log(igToken);
    console.log(post);
    axios.get(`https://graph.facebook.com/v9.0/instagram_oembed?url=https://www.instagram.com/p/${post}/&omitscript=true&hidecaption=true&access_token=${igToken}`)
    .then(response => {
        const igInfo = {
            author: response.data.author_name,
            cdn: response.data.thumbnail_url
        }
        res.json(igInfo);
    })
    .catch(err => res.status(422).json(err));
})

module.exports = router;