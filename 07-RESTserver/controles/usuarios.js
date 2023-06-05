const {response  , request} = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const usuariosGet = (req = params, res = response ) => {
    const  {q, nombre = 'No name',apikey , page = 1 , limit} = req.query;

    res.json({
        msg: 'get API - controlador',
        q, 
        nombre,
        apikey,
        page,
        limit
    })
}

const  usuariosPut = (req, res = response ) => {
    const {id} = req.param
    res.json({
        msg: 'put API - controlador',
        id
    })
}

const usuariosDelete = (req, res = ressponse ) => {
    res.json({
        msg: 'delete API - controlador'
    })
}

const usuariosPost =  async (req, res = response) => {

    const  {nombre, correo, password, rol }  = req.body;
    const usuario = new Usuario({
        nombre,
        correo,
        password,
        rol
    });
    //verificar si el correo existe

    //encriptar la contraseña
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync(password, salt);

    //guardar en db
    await usuario.save();

    res.json({
        msg: 'desde ppst',
        usuario
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