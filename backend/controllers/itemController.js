
var Category = require('../models/category');
var Item = require('../models/item');

var async = require('async');
//Get all categories of a menu
exports.item_list = function(req,res,next){

    Item.find({},'name category')
        .populate('category')
        .exec(function(err, list_items){
            if (err) {return next(err);}
            //Success
            res.json(list_items);
        })
}
exports.item_detail = function(req,res,next){
    Item.findById(req.param.id)
        .populate('category')
        .exec(function(err,item){
            if(err) {return next(err);}
            //Sucess
            res.json(item);
        })
}

exports.item_create = function(req,res,next) {
    var item = new Item(
        {
            name: req.body.name,
            price: req.body.price
        });
    item.save(function(err,item){
        if (err) {return next(err);}
        res.json(item);
    })
}