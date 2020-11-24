const db = require('./models');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function(passport) {
    passport.use(
        new LocalStrategy((username, password, done) => {
            db.User.findOne({ username: username })
            .then(user => {
                if (!user) {
                    return done(null, false, {message: "Incorrect username"});
                }
                bcrypt.compare(password, user.password, (err, result) => {
                    if (err) throw err;
                    if (result === true) {
                        return done(null, user);
                    } else {
                        return done(null, false, {message: "Incorrect password"});
                    }
                })
            })
        })
    );

    // passport.serializeUser((user, cb) => {
    //     cb(null, user.id);
    // });
    // passport.deserializeUser((id, cb) => {
    //     db.User.findOne({_id: id}, (err, user) => {
    //         cb(err, user);
    //     })
    // })

    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
        db.User.findOne({ _id: id}).then(user => {
            done(null, user.username);
        });
    });
};
