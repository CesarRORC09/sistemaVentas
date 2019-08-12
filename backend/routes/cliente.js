'use strict'
const express=require('express');
var ClienteController=require('../controller/cliente');
var {ver} = require('../middleware/autenticacion');

var router=express.Router();


router.get('/testCliente',ver,ClienteController.test);
router.post('/saveCliente',ClienteController.saveCliente);
router.get('/getCliente/:id',ClienteController.getCliente);
router.get('/getPerfil/:id',ver,ClienteController.getCliente);
router.get('/getClientes',ClienteController.getClientes);
router.put('/updateCliente/:id',ClienteController.updateCliente);
router.delete('/deleteCliente/:id',ClienteController.deleteCliente);
router.post('/login',ClienteController.login);


module.exports = router;