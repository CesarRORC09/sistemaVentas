var express=require('express');
var carritoController=require('../controller/carrito');
var router=express.Router();

router.post('/saveCarrito',carritoController.saveCarrito);

module.exports = router;