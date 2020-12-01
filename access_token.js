const { default: Axios } = require("axios");
require('dotenv').config();

// Axios.get("https://graph.facebook.com/oauth/access_token?client_id=204761497824117&client_secret=cc925962f7130fdfaa2590464cd4fdc6&grant_type=client_credentials")
// .then(data => console.log(data))
// .catch(err => console.log(err));

// access_token: '204761497824117|swYmFWa5sv52UWrzf2p-3z9kktw',
//     token_type: 'bearer'
const igToken = process.env.IG_TOKEN;
const url = 

Axios.get("https://graph.facebook.com/v9.0/instagram_oembed?url=https://www.instagram.com/p/CGwnya4p6_R/&omitscript=true&hidecaption=true&access_token=" + igToken)
.then(response => console.log(response.data.author_name, response.data.thumbnail_url))
.catch(err => console.log(err));