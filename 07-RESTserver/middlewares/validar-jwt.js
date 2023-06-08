const { response, request } = require('express');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario');

const validarJWT = async (req = request, res = response , next)  => {

    const token = req.header('x-token');
    //console.log(token);

    if (!token ){
        return res.status(401).json({
            msg: 'NO hay token en la peticion'
        });
    }
    try {

        const {uid} = jwt.verify(token ,process.env.SECRETOPRIVATEKEY);

        // leer el usuario que corresponde al uid
        const usuario = await Usuario.findById(uid);

        if( !usuario ){
            return res.status(401).json({
                msg: 'token no válido - usuario borrado de la db'
            })
        }

        // verificar si el uid tiene estado en true
        if ( !usuario.estado){
            return res.status(401).json({
                msg: 'token no válido - usuario con estado false'
            })
        }

        req.usuario = usuario;
        next();

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })

    }
    

}

module.exports ={
    validarJWT
}