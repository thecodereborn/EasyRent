var express = require('express');
var router = express.Router();
var csrf = require('csurf');
var passport = require('passport');


var csrfProtection = csrf();
router.use(csrfProtection);


router.get('/admin', function(req, res, next){
    var messages = req.flash('error');
    res.render('admin/admin-login', { layout: 'Admin_layout', csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0})
});


module.exports = router;


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}

function notLoggedIn(req, res, next) {
    if (!req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
}