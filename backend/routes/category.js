var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var passport =  require('passport');
var categoryController = require('../controllers/categoryController');
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/create', categoryController.category_create);

module.exports = router;