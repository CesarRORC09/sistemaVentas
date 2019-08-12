var ventaController=require('../controller/venta');
var express=require('express');

var router=express.Router();

router.post('/saveVenta',ventaController.saveVenta);
router.get('/getVenta/:id',ventaController.getVenta);

module.exports = router;