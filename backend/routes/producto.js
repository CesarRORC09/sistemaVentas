'use strict'
var express=require('express');
var ProductoController=require('../controller/producto');

var router=express.Router();
var multipart=require('connect-multiparty');
var multipartMiddleware=multipart({uploadDir:'./uploads'});

router.get('/test',ProductoController.test);
router.get('/getProductos',ProductoController.getProductos);
router.get('/getProducto/:id',ProductoController.getProducto);
router.delete('/deleteProducto/:id',ProductoController.deleteProducto);
router.post('/saveProducto',ProductoController.saveProducto);
router.post('/addLittleCar',ProductoController.addCarrito);
router.put('/updateProducto/:id',ProductoController.updateProducto);
router.post('/addImgPproducto/:id',multipartMiddleware,ProductoController.uploadImg);
router.get('/getImgProducto/:img',ProductoController.getImageFile);


module.exports = router;