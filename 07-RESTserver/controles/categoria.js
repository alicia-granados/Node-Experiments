const { response } = require("express");
const { Categoria } = require('../models')

const crearCategoria =  async (req , res = response ) => {
    
    const nombre = req.body.nombre.toUpperCase();

    const categoriaDB = await Categoria.findOne({nombre});

    if ( categoriaDB ){
        return res.status(400).json({
            msg: `la categoria ${ categoriaDB.nombre }, ya existe`
        })
    }
    //generar la data a guardar
    const data ={
        nombre,
        usuario: req.usuario._id
    }
    const categoria = new Categoria(data);

    //guardar en db
    await categoria.save();

    res.status(201).json(categoria)
}

//obtenercategorias -paginado- total - populate
const obtenerCategorias = async (req = params, res = response ) => {
    //const  {q, nombre = 'No name',apikey , page = 1 , limit} = req.query;
    const {limite = 5, desde = 0} =  req.query;
    const query = {estado :true}

    const [total, categorias] = await  Promise.all([
        Categoria.countDocuments(query),
        Categoria.find(query)
        .populate('usuario', 'nombre')
            .skip(Number(desde))
            .limit(Number(limite))
    ])
    res.json({
        total, 
        categorias
    })
}


// obtenercategoria - populate {}

const  obtenerCategoria = async (req, res = response ) => {
    const {id} = req.params;

    // TODO: validar contra base de datos
    const categoria = await Categoria.findByIdAndUpdate(id).populate('usuario', 'nombre');

    res.json({
        categoria
    })
}


//actualizar categoria

const  actulizarCategoria = async (req, res = response ) => {
    const {id} = req.params;
    const {estado, usuario,  ...data} = req.body;

    data.nombre= data.nombre.toUpperCase();
    data.usuario = req.usuario._id;

    // TODO: validar contra base de datos
    const categoria = await Categoria.findByIdAndUpdate(id, data, {new:true});

    res.json(
        categoria
    )
}

//borrarcategoria - estado :false
const categoriaDelete = async (req, res = response ) => {
    const {id} = req.params;

    const categoriaBorrada = await Categoria.findByIdAndUpdate(id, { estado: false}, {new: true})
  
    res.json(categoriaBorrada)
}



module.exports={
    crearCategoria,
    obtenerCategorias,
    obtenerCategoria,
    actulizarCategoria,
    categoriaDelete
}