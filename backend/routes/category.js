var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var passport =  require('passport');
var categoryController = require('../controllers/categoryController');
var itemController = require('../controllers/itemController');
router.use(bodyParser.urlencoded({ extended: true }));
var multer = require('multer');
var storage = multer.diskStorage({
        destination: function(req, file, cb) {
            cb(null, './public/uploads/')
        },
        filename: function(req, file, cb) {
            cb(null, file.originalname)
        }
    })
    //var upload = multer({ dest: '../public/img/products/', storage: storage });
var upload = multer({ storage: storage });


router.post('/create', categoryController.category_create);
router.get('/:id',categoryController.category_details);
router.post('/:id',  upload.single('img'), itemController.item_create);

module.exports = router;