var Category = require('../models/category');
var Item = require('../models/item');

var async = require('async');

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