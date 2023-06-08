const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req = request, res = response , next)  => {

    const token = req.header('x-token');
    //console.log(token);

    if (!token ){
        return res.status(401).json({
            msg: 'NO hay token en la peticion'
        });
    }
    try {

        const {uid} = jwt.verify(token ,process.env.SECRETOPRIVATEKEY);
        req.uid = uid;
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