var Menu = require('../models/menu');
var Category = require('../models/category');
var async = require('async');
var authConfig = require('../config/auth');

var User = require('../models/user');
//Show manager include all menu created by manager
exports.manager_detail = function(req,res,next) {
    async.parallel({
        creator: function (callback) {
            User.findById(req.params.id)
                .exec(callback)
        },
        creator_menus: function (callback) {
            Menu.find({ 'creator': req.params.id })
                .exec(callback)
        },
    }, function (err, results) {
        if (err) { return next(err); } // Error in API usage.
        if (results.creator == null) { // No results.
            var err = new Error('Creator not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.json({ creator: results.creator, creator_menus: results.creator_menus });
    });
}