var mongoose = require('mongoose');

var CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    menu: {type: Schema.Types.ObjectId, ref:'Menu'},
    items: [{type: Schema.Types.ObjectId, ref:'Item'}]
})
module.exports = mongoose.model('Category',CategorySchema);