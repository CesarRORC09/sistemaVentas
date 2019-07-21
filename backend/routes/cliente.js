'use strict'
var express=require('express');
var ClienteController=require('../controller/cliente');
var {ver} = require('../middleware/autenticacion');

var router=express.Router();


router.get('/testCliente',ver,ClienteController.test);
router.post('/saveCliente',ver,ClienteController.saveCliente);
router.get('/getCliente/:id',ver,ClienteController.getCliente);
router.get('/getClientes',ver,ClienteController.getClientes);
router.put('/updateCliente/:id',ver,ClienteController.updateCliente);
router.delete('/deleteCliente/:id',ver,ClienteController.deleteCliente);
router.post('/login',ClienteController.login);


module.exports = router;