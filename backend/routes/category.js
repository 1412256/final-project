var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var passport =  require('passport');
var categoryController = require('../controllers/categoryController');
var itemController = require('../controllers/itemController');
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/create', categoryController.category_create);
router.get('/:id',itemController.item_list);
router.post('/:id',itemController.item_create);

module.exports = router;