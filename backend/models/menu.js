var mongoose = require('mongoose');

var MenuSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    isCheck: {
        type: boolean,
        default: false
    },
    creator: {type: Schema.Types.ObjectId, ref:'User',required: true},
    categories: [{type: Schema.Types.ObjectId, ref: 'Category'}]
});
module.exports = mongoose.model('Menu',MenuSchema);