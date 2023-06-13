const {Router} = require('express');
const {check } = require('express-validator');
const { validarJWT, validarCampos } = require('../middlewares');
const { crearCategoria } = require('../controles/categoria');

const router = Router();

//obtener todas las categorias - publico
router.get('/', (req, res ) =>{
    res.json('get')
});  

//obtener una  categoria por id - publico
router.get('/:id', (req, res ) =>{
    res.json('get is¿d')
});  

//crear categoria - privado - cualquier persona con un token válido
router.post('/',[
    validarJWT,
    check('nombre', 'EL nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategoria);  

//actualizar  categoria por id- privado - cualquier persona con un token válido
router.put('/:id', (req, res ) =>{
    res.json('put')
});  

//borrar  categoria por id- admin
router.put('/:id', (req, res ) =>{
    res.json('delete')
});  

module.exports= router;