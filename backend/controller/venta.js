var Venta=require('../models/venta');

var controller={
    saveVenta:(req,res)=>{
        var params=req.body;
        var venta=new Venta();

        venta.fecha=params.fecha;
        venta.cliente=params.cliente;
        venta.carrito=params.carrito;

        venta.save((err,venta)=>{
            if(err) res.status(500).send({mensaje:'error en el servidor'});

            if(!venta) res.status(404).send({mensaje:'error al guardar'});

            return res.status(200).send(venta);
        });
    }
}
module.exports = controller;