var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var passport =  require('passport');
var menuController = require('../controllers/menuController');
var categoryController = require('../controllers/categoryController');
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/request-menu',menuController.menu_request_list);
router.get('/publish-menu',menuController.menu_publish_list);
router.post('/create', menuController.menu_create);
router.post('/:id',categoryController.category_create);
router.get('/:id',menuController.menu_details);
router.post('/:id/accept',menuController.check_menu);
//router.get('/:id',menuController.menu_details);
router.post('/:id/update', menuController.menu_update);
module.exports = router;