var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var CategorySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    menu: {type: Schema.Types.ObjectId, ref:'Menu'},
})
module.exports = mongoose.model('Category',CategorySchema);