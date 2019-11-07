const express = require('express');
const router = express.Router();
const passportGoogle = require('../auth/google');

/*
**  when click 'login with google' button, it runs
*/

router.get('/google', passportGoogle.authenticate(
    'google',
    {
        scope: ['profile'] // getting values
    }
));

/*
**  when google return user informations , it runs
*/

router.get('/google/callback', passportGoogle.authenticate(
    'google',
    {
        failureRedirect: '/' // when login error, redirects
    }),
    (req, res) => {
        res.redirect('/chat'); // when login succees, redirects
});

module.exports = router;
