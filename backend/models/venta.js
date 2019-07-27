var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var ventaSchema=Schema({
    fecha:{
        type:Date,
        default:Date.now
    },
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
    }],
    valor_total:Number,

});
module.exports = mongoose.model("venta",ventaSchema);