var Category = require('../models/category');
var Item = require('../models/item');

var async = require('async');
//Get all categories of a menu
exports.category_list = function(req,res,next){

    Category.find({},'name menu')
        .populate('menu')
        .exec(function(err, list_categories){
            if (err) return next(err);
            //Success
            res.json(list_categories);
        })
}
//Get details of category (include Items).
exports.category_details = function(req,res,next) {
    async.parallel({
        category: function(callback){

            Category.findById(req.param.id)
                .exec(callback);
        },

        category_items: function(callback){
            Item.find({'category': req.param.id})
                .exec(callback);
        },

    }, function(err, results) {
        if (err) { return next(err); }
        if (results.category==null) { // No results.
            var err = new Error('Category not found');
            err.status = 404;
            return next(err);
        }
        // Successful, send result
        res.json({category: results.category, category_items: results.category_items });
    }); 
};

exports.category_create = function(req,res,next) {
    var category = new Category(
        {
            name: req.body.name,
        });
    category.save(function(err,category){
        if (err) {return next(err);}
        res.json(category);
    })
}