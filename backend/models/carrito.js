var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var carritoSchema=Schema({
    valor_total:Number,
    cliente:{
        type:Schema.Types.ObjectId,
        ref:"cliente"
    },
    productos:[{
        producto:{
            type:Schema.Types.ObjectId,
            ref:"producto"
        },
        cantidad:Number
    }]
});
module.exports = mongoose.model("carrito",carritoSchema);