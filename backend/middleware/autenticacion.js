var jwt=require("jsonwebtoken");

let ver = (req,res,next)=>{

    let token = req.get("Authorization");

    jwt.verify(token,process.env.SECRET,(err,usuario)=>{
        if(err) return res.status(500).send({mensaje:"Token no valido"});

        req.usuario=usuario.data;

        next();

    });
}
module.exports = {ver};