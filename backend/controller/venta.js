var Venta=require('../models/venta');
var Producto=require('../models/producto');

var controller={
    saveVenta:(req,res)=>{
        var params=req.body;
        var venta=new Venta();

        venta.fecha=params.fecha;
        venta.cliente=params.cliente;
        venta.productos=params.productos;
        
        // params.productos.forEach(element => {
        //     if(validarExistencia(element.producto.id,element.cantidad)){
        //         venta.productos.append({
        //             producto:element.producto.id,
        //             cantidad:element.cantidad
        //         });
        //     }
        // });

        // let validarExistencia=(id_producto,cantidad)=>{
        //     Producto.findById(id_producto).exec((err,data)=>{
        //         if(data.no_existencias>=cantidad){
        //             return true;
        //         }else{
        //             return false;
        //         }
        //     });
        // }


        venta.save((err,venta)=>{
            if(err) res.status(500).send({mensaje:'error en el servidor'});

            if(!venta) res.status(404).send({mensaje:'error al guardar'});

            return res.status(200).send(venta);
        });
    }
}
module.exports = controller;