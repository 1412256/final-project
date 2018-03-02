var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var passport =  require('passport');
var itemController = require('../controllers/itemController');
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/create', itemController.item_create);
router.get('/:id',itemController.item_detail);
router.post('/:id/update',itemController.item_update);
module.exports = router;