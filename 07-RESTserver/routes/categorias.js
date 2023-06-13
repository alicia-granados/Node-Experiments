const {Router} = require('express');
const {check } = require('express-validator');
const { validarJWT, validarCampos, esAdminRole } = require('../middlewares');
const { 
    crearCategoria,
    obtenerCategorias,
    obtenerCategoria,
    actulizarCategoria, 
    categoriaDelete} = require('../controles/categoria');
const { existeCategoriaPorId } = require('../helpers/db-validation');

const router = Router();

//obtener todas las categorias - publico
router.get('/', obtenerCategorias);  

//obtener una  categoria por id - publico
router.get('/:id',[ 
    check('id', 'NO es un id válido').isMongoId(),
    check('id').custom(existeCategoriaPorId),
    validarCampos,
], obtenerCategoria);  

//crear categoria - privado - cualquier persona con un token válido
router.post('/',[
    validarJWT,
    check('nombre', 'EL nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategoria);  

//actualizar  categoria por id- privado - cualquier persona con un token válido
router.put('/:id',[
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('id').custom(existeCategoriaPorId),
    validarCampos
] , actulizarCategoria);  

//borrar  categoria por id- admin
router.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'NO es un id válido').isMongoId(),
    check('id').custom(existeCategoriaPorId),
    validarCampos
], categoriaDelete);  

module.exports= router;