var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var passport =  require('passport');
var itemController = require('../controllers/itemController');
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/create', itemController.item_create);

module.exports = router;