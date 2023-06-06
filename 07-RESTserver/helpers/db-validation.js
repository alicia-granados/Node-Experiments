const Role = require('../models/role');

const esRolValido = async ( rol = '' )  => {
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`EL rol ${rol} no está registado en la BD`)
    }
}

module.exports={
    esRolValido
}