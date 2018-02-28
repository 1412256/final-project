var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var passport =  require('passport');
router.use(bodyParser.urlencoded({ extended: true }));
var AuthenticationController = require('../controllers/authentication');

var requireAuth = passport.authenticate('jwt', {session: false});
var requireLogin = passport.authenticate('local', {session: false});


router.post('/register',AuthenticationController.register);
router.post('/login',requireLogin,AuthenticationController.login);
router.get('/register', function(req, res, next) {
    res.render('register-test');
});
router.get('/protected', requireAuth ,function(req,res){
    res.send({content: 'Success'});
})
module.exports = router;

