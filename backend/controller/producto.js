var Producto = require('../models/producto');
var fs = require('fs');
var path = require('path');

var controller={
    test:(req,res)=>{
        res.status(200).send({mensaje:"hola mundo"});
    },
    getProductos:(req,res)=>{
        Producto.find().sort("marca").exec((err,productos)=>{
            if(err) res.status(500).send({mensaje:"Error en el servidor"});

            if(!productos) res.status(404).send({mensaje:"No hay productos"});

            return res.status(200).send(productos);
        });

    },
    getProducto:(req,res)=>{
        var id_producto=req.params.id
        if(id_producto==null) return res.status(404).send({mensaje:"El docuemneto no existe"});

        Producto.findById(id_producto,(err,producto)=>{
            if(err) return res.status(500).send({mensaje:"Error al buscar el producto"});

            if(!producto) return res.status(404).send({mensaje:"No se encontro el producto"});

            return res.status(200).send(producto);
        });

    },
    saveProducto:(req,res)=>{
        var producto= new Producto();
        var params=req.body;

        producto.nombre=params.nombre;
        producto.precio=params.precio;
        producto.marca=params.marca;
        producto.no_existencias=params.no_existencias;
        producto.status=params.status;

        producto.save((err,producto)=>{
            if(err) res.status(500).send({mensaje:"Error al guardar el producto"});

            if(!producto) res.status(404).send({mensaje:"No se pudo guardar el producto"});

            return res.status(200).send({producto:producto});
        });

    },
    deleteProducto:(req,res)=>{
        var id_producto=req.params.id;
        Producto.findByIdAndRemove(id_producto,(err,producto)=>{
            if(err) res.status(500).send({mensaje:"Error al borrar el producto"});

            if(!producto) res.status(404).send({mensaje:"No se pudo borrar el producto"});

            return res.status(200).send({producto:producto});
        });

    },
    addCarrito:(req,res)=>{

    },
    updateProducto:(req,res)=>{
        var id_producto=req.params.id;
        var actualizacion=req.body;
        Producto.findByIdAndUpdate(id_producto,actualizacion,{new:true},(err,producto)=>{
            if(err) res.status(500).send({mensaje:"Error al actualizar el producto"});

            if(!producto) res.status(404).send({mensaje:"No se pudo actualizar el producto"});

            return res.status(200).send({producto:producto});
        })

    },
    uploadImg:(req,res)=>{
        var id_producto=req.params.id;
        var fileName="imagen no subida";

        if(req.files){
            var filePath=req.files.img.path;
            var fileSplit=filePath.split('\\');
            var fileNombre=fileSplit[1];
            var nameSplit=fileNombre.split('\.');
            var fileExt=nameSplit[1];
            console.log(fileExt);
            
            if(fileExt=='png'||fileExt=='jpg'||fileExt=='jpeg'||fileExt=='gif'){
                Producto.findByIdAndUpdate(id_producto,{img:fileNombre},{new:true},(err,producto)=>{
                    if(err) return res.status(500).send({mensaje:"Error al subir imagen"});

                    if(!producto) return res.status(404).send({mensaje:"Producto no encontrado"});

                    return res.status(200).send({producto:producto});
                });
            }else{
                fs.unlink(filePath,(err)=>{
                    return res.status(500).send({mensaje:"extencion no valida"});
                });
            }
        }else{
            return res.status(200).send({mensaje:fileName});
        }
    },
    getImageFile:(req,res)=>{
        var file=req.params.img;
        var path_file='./uploads/'+file;

        fs.exists(path_file,(exists)=>{
            if(exists) {
                return res.sendFile(path.resolve(path_file));
            }else{
                return res.status(200).send({mensaje:"no existe la imagen"});
            }
        });

    }
}

module.exports =  controller;