var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    categories: {type: String, required: true},
    rating: {type: Number, default: 1}
});

module.exports = mongoose.model('Product', schema);