
var Category = require('../models/category');
var Item = require('../models/item');

var async = require('async');
//Get all items of a category
exports.item_list = function(req,res,next){

    Item.find({"category": req.params.id},'name category')
        .populate('category')
        .exec(function(err, list_items){
            if (err) {return next(err);}
            //Success
            res.json(list_items);
        })
}
exports.item_detail = function(req,res,next){
    Item.findById(req.params.id)
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
            price: req.body.price,
            category: req.params.id
        });
    item.save(function(err,item){
        if (err) {return next(err);}
        res.json(item);
    })
}

exports.item_update = function(req,res,next) {
    var updateItem = new Item(
        {
            name: req.body.name,
            price: req.body.price,
            category: req.body.category,
            _id: req.params.id
        });
    updateItem.findByIdandUpdate(req.params.id,updateItem, {}, function(err,item){
        if(err) {return next(err);}
        res.json({message:"success",updatedItem: item});
    })
}