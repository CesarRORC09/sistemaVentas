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
    carrito:{
        type:Schema.Types.ObjectId,
        ref:"carrito"
    }
});
module.exports = mongoose.model("venta",ventaSchema);