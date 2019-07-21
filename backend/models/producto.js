var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productoSchema = Schema({
    nombre:String,
    precio:Number,
    marca:String,
    no_existencias:Number,
    status:String,
    img:String
});

module.exports = mongoose.model("producto",productoSchema);