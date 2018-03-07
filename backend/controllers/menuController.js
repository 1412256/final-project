var Menu = require('../models/menu');
var Category = require('../models/category');
var async = require('async');
var authConfig = require('../config/auth');
//Get all request menu.
exports.menu_request_list = function(req, res, next){
    Menu.find({'isCheck':'false'})
        .exec(function( err, list_request_menus){
            if (err) {return next(err); }
            res.json(list_request_menus);
        });
};

//Get all publish menu.
exports.menu_publish_list = function(req,res,next){
    Menu.find({'isCheck':'true'})
        .exec(function( err, list_request_menus){
            if (err) {return next(err); }
            res.json(list_request_menus);
        });

};

//Get details of menu (include Categories).
exports.menu_details = function(req,res,next) {
    async.parallel({
        menu: function(callback){

            Menu.findById(req.params.id)
                .exec(callback);
        },

        menu_categories: function(callback){
            Category.find({'menu': req.params.id})
                .exec(callback);
        },

    }, function(err, results) {
        if (err) { return next(err); }
        if (results.menu==null) { // No results.
            var err = new Error('Menu not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.json({menu: results.menu, menu_categories: results.menu_categories });
    }); 
};

 exports.menu_create = function(req,res,next) {

    var menu = new Menu(
        {
            name: req.body.name,
        });
    menu.save(function(err,menu){
        if (err) {return next(err);}
        res.json(menu);
    })
} 

exports.check_menu = function(req,res,next){
   var request_menu = Menu.findById(req.params.id);
    var updateMenu = new Menu(
        {
            name: request_menu.name,
            isCheck: 'true',
            _id:req.params.id
        });
    Menu.findByIdAndUpdate(req.params.id , updateMenu , {}, function(err,menu){
        if(err) {return next(err);}
        res.json({message:"success accept a menu",publish: menu});
    })

}
