var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var auth = require('./auth');
router.use(bodyParser.urlencoded({ extended: true }));

router.use('/auth',auth);

module.exports = router;