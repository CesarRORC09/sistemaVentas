'use strict'
var express=require('express');
var bodyParser=require('body-parser');
var session=require('express-session')

var app=express();
//archivos rutas
var indice_rutas=require('./routes/indice');
//var router_productos=require('./routes/producto');
//var router_cliente=require('./routes/cliente');
//middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());//convertir lo que llega de la peticion en JSON

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//rutas
//app.use('/api',router_productos);
//app.use('/api,router_cliente);
app.use(indice_rutas);
//exportar
module.exports = app;