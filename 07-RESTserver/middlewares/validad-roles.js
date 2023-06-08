const { response } = require("express")

const esAdminRole = (req,res =  response , next) =>{

    if( !req.usuario ){
        res.status(500).json({
            msg: 'Se quiere validar el rol sin validar el token primero'
        })
    }

    const {rol, nombre } = req.usuario;

    if( rol !== 'ADMIN_ROLE'){
        res.status(401).json({
            msg: `${nombre} no es administrador - no puede hacer esto`
        });
    }

    next();

}

module.exports={
    esAdminRole
}