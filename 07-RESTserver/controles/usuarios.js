const {response} = require('express')


const usuariosGet = (req, res = response ) => {
    res.json({
        msg: 'get API - controlador'
    })
}

const  usuariosPut = (req, res = response ) => {
    res.json({
        msg: 'put API - controlador'
    })
}

const usuariosDelete = (req, res = ressponse ) => {
    res.json({
        msg: 'delete API - controlador'
    })
}

const usuariosPost =  (req, res = response) => {

    const  {nombre, edad}  = req.body;

    res.json({
        msg: 'post API- controlador',
        nombre, 
        edad
    })
}

const usuariosPatch =  (req, res = response) => {
    res.json({
        msg: 'patch API- controlador'
    })
}
module.exports ={
    usuariosGet,
    usuariosPut,
    usuariosDelete, 
    usuariosPost,
    usuariosPatch
}