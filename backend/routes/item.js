var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var passport =  require('passport');
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

debugger;
router.post('/create', upload.single('file'), itemController.item_create);
router.get('/:id',itemController.item_detail);
router.post('/:id/update',upload.array("uploads[]", 12),itemController.item_update);
module.exports = router;