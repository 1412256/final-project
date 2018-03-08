var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var passport =  require('passport');
var managerController = require('../controllers/managerControllers');
var menuController = require('../controllers/menuController');
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/:id',managerController.manager_detail);

module.exports = router;