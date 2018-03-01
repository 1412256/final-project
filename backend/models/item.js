var mongoose = require('mongoose');

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
    category: {type: Schema.Types.ObjectId, ref:'Category'}
})
module.exports = mongoose.model('Item',ItemSchema);