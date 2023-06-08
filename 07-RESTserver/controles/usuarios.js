const {response  , request} = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');

const usuariosGet =  async (req = params, res = response ) => {
    //const  {q, nombre = 'No name',apikey , page = 1 , limit} = req.query;
    const query = {estado :true}
    const {limite = 5, desde = 0} =  req.query;

    const [total, usuarios] = await  Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip(Number(limite))
            .limit(Number(limite))
    ])
    res.json({
        total, 
        usuarios
    })
}

const  usuariosPut = async (req, res = response ) => {
    const {id} = req.params;
    const {_id, password, google,correo, ... resto} = req.body;
    // TODO: validar contra base de datos
    if( password){
        //encriptar la contraseña
        const salt = bcryptjs.genSaltSync(10);
        resto.password = bcryptjs.hashSync(password, salt);
    }
    const usuario = await Usuario.findByIdAndUpdate(id, resto);

    res.json({
        usuario
    })
}

const usuariosDelete = async (req, res = response ) => {
    const {id} = req.params;
    const uid = req.uid;

    //FISICAMENTE LO BORRAMOS
    //const usuario = await Usuario.findByIdAndDelete(id)
    const usuario = await Usuario.findByIdAndUpdate(id, { estado: false})
    res.json({usuario, uid})
}

const usuariosPost =  async (req, res = response) => {
    
    const  {nombre, correo, password, rol }  = req.body;
    const usuario = new Usuario({
        nombre,
        correo,
        password,
        rol
    });

    //encriptar la contraseña
    const salt = bcryptjs.genSaltSync(10);
    usuario.password = bcryptjs.hashSync(password, salt);

    //guardar en db
    await usuario.save();

    res.json({
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