var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var passport =  require('passport');
var menuController = require('../controllers/menuController');
var categoryController = require('../controllers/categoryController');
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/create', menuController.menu_create);
router.post('/:id',categoryController.category_create);
router.get('/:id',categoryController.category_list);

module.exports = router;