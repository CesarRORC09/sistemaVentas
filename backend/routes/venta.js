var ventaController=require('../controller/venta');
var express=require('express');

var router=express.Router();

router.post('/saveVenta',ventaController.saveVenta);

module.exports = router;