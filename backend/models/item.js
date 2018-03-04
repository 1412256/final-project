var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ItemSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    price:{
        type: Number,
        required:true
    },
    imgdata: { type: Buffer },
    imgcontentType: { type: String },
    category: {type: Schema.Types.ObjectId, ref:'Category'}
})
module.exports = mongoose.model('Item',ItemSchema);