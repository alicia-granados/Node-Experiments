const { Categoria, Usuario, Producto } = require('../models');
const Role = require('../models/role');

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

const existeCategoriaPorId =  async (id = '') => {
    const existeCategoria = await Categoria.findById(id);
    if(!existeCategoria){
        throw new Error(`EL id ${id} no existe`)
    }
}

const existeUsuarioPorId =  async (id ) => {
    const existeUsuario = await Usuario.findById(id);
    if(!existeUsuario){
        throw new Error(`EL id ${id} no existe`)
    }
}

const  existeProductoPorId =  async (id = '') => {
    const existeProducto = await Producto.findById(id);
    if(!existeProducto){
        throw new Error(`EL id ${id} no existe`)
    }
}

//validar colecciones permitidas

const coleccionesPermitidas = (coleccion = '', colecciones = [])=>{
    const incluida = colecciones.includes( coleccion);
    if( !incluida ) {
        throw new Error(`la coleccion ${coleccion} no es permitida, ${colecciones}`)
    }
    return true;
}

module.exports={
    esRolValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeProductoPorId,
    coleccionesPermitidas
}