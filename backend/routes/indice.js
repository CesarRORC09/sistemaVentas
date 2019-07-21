var express=require('express');
var app=express();
var rutas_producto=require('./producto');
var rutas_cliente=require('./cliente');

app.use('/api',rutas_producto);
app.use('/api',rutas_cliente);

module.exports = app;