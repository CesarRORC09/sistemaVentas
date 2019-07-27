var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var clienteSchema = Schema({
    email:{type:String,unique:true},
    nombre:{type:String},
    a_paterno:{type:String},
    a_materno:{type:String},
    password:{type:String,},
    username:{type:String,unique:true},
    edad:{type:Number}
});

module.exports =mongoose.model("cliente",clienteSchema);