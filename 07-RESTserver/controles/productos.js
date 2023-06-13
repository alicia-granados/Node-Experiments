const { response } = require("express");
const {  Producto } = require('../models')

const crearProducto =  async (req , res = response ) => {
    
    const { estado, usuario, ...body}= req.body;

    const ProductoDB = await Producto.findOne({nombre: body.nombre});

    if ( ProductoDB ){
        return res.status(400).json({
            msg: `el producto ${ ProductoDB.nombre }, ya existe`
        })
    }

    //generar la data a guardar
    const  data = {
        ...body,
        nombre: body.nombre.toUpperCase(),
        usuario: req.usuario._id ,
    }

    const producto = new Producto(data);

    //guardar en db
    await producto.save();

    res.status(201).json(producto)
}

//obtenerProductos -paginado- total - populate
const obtenerProductos = async (req = params, res = response ) => {
    
    const {limite = 5, desde = 0} =  req.query;
    const query = {estado :true}

    const [total, productos] = await  Promise.all([
        Producto.countDocuments(query),
        Producto.find(query)
        .populate('usuario', 'nombre')
        .populate('categoria', 'nombre')
            .skip(Number(desde))
            .limit(Number(limite))
    ])
    res.json({
        total, 
        productos
    })
}


// obtenerProducto - populate {}

const  obtenerProducto = async (req, res = response ) => {
    const {id} = req.params;

    // TODO: validar contra base de datos
    const producto = await Producto.findByIdAndUpdate(id)
        .populate('usuario', 'nombre').populate('categoria', 'nombre');

    res.json({
        producto
    })
}


//actualizar producto

const  actulizarProducto = async (req, res = response ) => {
    const {id} = req.params;
    const {estado, usuario,  ...data} = req.body;

    if( data.nombre){
        data.nombre= data.nombre.toUpperCase();
    }

    data.usuario = req.usuario._id;

    // TODO: validar contra base de datos
    const producto = await Producto.findByIdAndUpdate(id, data, {new:true});

    res.json(
        producto
    )
}

//borrarproducto - estado :false
const productoDelete = async (req, res = response ) => {
    const {id} = req.params;

    const productoBorrado = await Producto.findByIdAndUpdate(id, { estado: false}, {new: true})
  
    res.json(productoBorrado)
}



module.exports={
    crearProducto,
    obtenerProductos,
    obtenerProducto,
    actulizarProducto,
    productoDelete
}