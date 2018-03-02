var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MenuSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    isCheck: {
        type: Boolean,
        default: false
    },
    creator: {type: Schema.Types.ObjectId, ref:'User'},
   
});
module.exports = mongoose.model('Menu',MenuSchema);