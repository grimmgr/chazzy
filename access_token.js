const { default: Axios } = require("axios");

// Axios.get("https://graph.facebook.com/oauth/access_token?client_id=204761497824117&client_secret=cc925962f7130fdfaa2590464cd4fdc6&grant_type=client_credentials")
// .then(data => console.log(data))
// .catch(err => console.log(err));

// access_token: '204761497824117|swYmFWa5sv52UWrzf2p-3z9kktw',
//     token_type: 'bearer'


Axios.get("https://graph.facebook.com/v9.0/instagram_oembed?url=https://www.instagram.com/p/CGwnya4p6_R/&maxwidth=450&access_token=EAAC6OsBXa3UBAJBIA293C4nh5omzrOBSrNWvN8hwZCBWLULvJo9CKeihZCau3hqyikJZCuewBRQjZACTHEZCa7MQH5k2UsofbZB7EMjndmi0NSpZB8ZC6jbgh3ElksGI3lOZBLWq1hglikvTdpOzXDpb3FYzzwGyYbJtw9b1ZB55QCAAZDZD")
.then(data => console.log(data))
.catch(err => console.log(err));