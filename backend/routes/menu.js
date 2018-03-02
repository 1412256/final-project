var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var passport =  require('passport');
var menuController = require('../controllers/menuController');
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/create', menuController.menu_create);

module.exports = router;