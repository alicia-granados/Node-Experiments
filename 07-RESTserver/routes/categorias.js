const {Router} = require('express');
const {check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar_campos');

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
router.post('/', (req, res ) =>{
    res.json('post')
});  

//actualizar  categoria por id- privado - cualquier persona con un token válido
router.put('/:id', (req, res ) =>{
    res.json('put')
});  

//borrar  categoria por id- admin
router.put('/:id', (req, res ) =>{
    res.json('delete')
});  

module.exports= router;