var Cliente=require('../models/cliente');

//para encriptar datos del usuario
var bcrytp=require('bcrypt');
var jwt=require('jsonwebtoken');





var controller={
    test:(req,res)=>{
        res.status(200).send({mensaje:"hola mundo desde el cliendte"});
    },
    saveCliente:(req,res)=>{
        var cliente=new Cliente();
        var params=req.body;

        cliente.email=params.email;
        cliente.nombre=params.nombre;
        cliente.a_paterno=params.a_paterno;
        cliente.a_materno=params.a_materno;
        cliente.password=bcrytp.hashSync(params.password,10);
        cliente.username=params.username;
        cliente.edad=params.edad;
        cliente.created_at=params.created_at;

        cliente.save((err,cliente)=>{
            if(err) return res.status(500).send({mensaje:"error al guardar"});

            if(!cliente) return res.status(404).send({mensaje:"no se pudo guardar"});

            return res.status(200).send({cliente:cliente});
        });
    },
    getClientes:(req,res)=>{
        Cliente.find().sort("username").exec((err,clientes)=>{
            if(err) return res.status(500).send({mensaje:"error al buscar"});

            if(!clientes) return res.status(404).send({mensaje:"no se pudo encontrar cliente"});

            return res.status(200).send({clientes});
        });
    },
    getCliente:(req,res)=>{
        var id_cliente=req.params.id;
        if(id_cliente==null) return res.status(404).send({mensaje:"No se encontro cliente"});

        Cliente.findById(id_cliente,(err,cliente)=>{
            if(err) return res.status(500).send({mensaje:"Error al buscar cliente"});

            if(!cliente) return res.status(404).send({mensaje:"no se encontro cliente"});

            return res.status(200).send(cliente);
        });

    },
    updateCliente:(req,res)=>{
        var id_cliente=req.params.id;
        var actualizacion=req.body;
        Cliente.findByIdAndUpdate(id_cliente,actualizacion,{new:true},(err,cliente)=>{
                if(err) return res.status(500).send({mensaje:"Error al actualizar cliente"});
    
                if(!cliente) return res.status(404).send({mensaje:"no se encontro cliente"});
    
                return res.status(200).send({cliente:cliente});
            
        });
    },
    deleteCliente:(req,res)=>{
        var id_cliente=req.params.id;
        Cliente.findByIdAndRemove(id_cliente,(err,cliente)=>{
            if(err) return res.status(500).send({mensaje:"Error al borrar cliente"});
    
            if(!cliente) return res.status(404).send({mensaje:"no se encontro cliente"});

            return res.status(200).send({cliente:cliente});
        });
    },
    login:(req,res)=>{
        var pass=req.body.password;
        Cliente.findOne({username:req.body.username},(err,cliente)=>{
            console.log(req.body);
            if(err) return res.status(500).send({mensaje:"Error al buscar cliente"});
    
            if(!cliente) return res.status(404).send({mensaje:"Usuario invalido"});
    
            if(!bcrytp.compareSync(pass,cliente.password)) return res.status(404).send({mensaje:"Contraseña invalido"});
            
            let token= jwt.sign({
                data:cliente
            },process.env.SECRET,{expiresIn:'1h'});

            return res.status(200).send({ok:true,cliente:cliente,token:token});
        });
    }
}
module.exports = controller;