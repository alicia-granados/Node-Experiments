const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRolValido = async ( rol = '' )  => {
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`EL rol ${rol} no está registado en la BD`)
    }
}

const emailExiste =  async (correo = '') => {
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail){
        throw new Error(`EL correo ${correo} ya esta registrado`)
    }
}

module.exports={
    esRolValido,
    emailExiste
}