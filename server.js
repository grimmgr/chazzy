require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(session({
    secret: 'galsonly',
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, './client/build/index.html'));
// });

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/chazzy',
{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
