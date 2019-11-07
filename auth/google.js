const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');

// models
const User = require('../models/Users');

// middlewares
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_LOGIN_CLIENT_ID,
    clientSecret: process.env.GOOGLE_LOGIN_CLIENT_SECRET,
    callbackURL: process.env.GOOGLE_LOGIN_CALLBACK_URL
}, (accessToken, refreshToken, profile, done) => {
    const data = profile._json;
    console.log(data);
}));

module.exports = passport;