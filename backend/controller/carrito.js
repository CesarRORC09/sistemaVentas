var Carrito=require('../models/carrito');

var controller={
    saveCarrito:(req,res)=>{
        var params = req.body;
        var carrito = new Carrito();

        carrito.valor_total=params.valor_total;
        carrito.productos=params.productos;
        carrito.cliente=params.cliente;

        carrito.save((err,carrito)=>{
            if(err) return res.status(500).send({mensaje:'error en el servidor'});

            if(!carrito) return res.status(404).send({mensaje:'Error al guardar'});

            return res.status(200).send(carrito);
        })
    }
}

module.exports = controller;