'use strict'
var mongoose=require("mongoose");
var app=require('./app');
require('./config/config');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/tienda')
        .then(()=>{
            console.log("conexion con la base de datos establecida correctamente...");
            app.listen(process.env.PORT,()=>{
                console.log("El servidor esta corriendo en el puerto "+ process.env.PORT+"...");
            });
        })
        .catch(err => console.log(err));

