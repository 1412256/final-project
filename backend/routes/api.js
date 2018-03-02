var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var auth = require('./auth');
var item = require('./item');
var category = require('./category');
var menu = require('./menu');
router.use(bodyParser.urlencoded({ extended: true }));

router.use('/auth',auth);
router.use('/item',item);
router.use('/category',category);
router.use('/menu',menu);

module.exports = router;