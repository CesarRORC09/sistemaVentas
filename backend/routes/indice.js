var express=require('express');
var app=express();
var pre='/api';
var rutas_producto=require('./producto');
var rutas_cliente=require('./cliente');
var rutas_ventas=require('./venta');
var rutas_carrito=require('./carrito');

app.use(pre,rutas_producto);
app.use(pre,rutas_cliente);
app.use(pre,rutas_carrito);
app.use(pre,rutas_ventas);

module.exports = app;