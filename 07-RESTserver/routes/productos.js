const {Router} = require('express');
const {check } = require('express-validator');
const { validarJWT, validarCampos, esAdminRole } = require('../middlewares');
const { 
    crearProducto,
    obtenerProductos,
    obtenerProducto,
    actulizarProducto,
    productoDelete
} = require('../controles/productos');
const { existeCategoriaPorId, existeProductoPorId } = require('../helpers/db-validation');

const router = Router();

//obtener todos los productos - publico
router.get('/', obtenerProductos);  

//obtener un  producto por id - publico
router.get('/:id',[ 
    check('id', 'NO es un id válido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos,
], obtenerProducto);  

//crear producto - privado - cualquier persona con un token válido
router.post('/',[
    validarJWT,
    check('nombre', 'EL nombre es obligatorio').not().isEmpty(),
    check('categoria', 'No es un id de mongo').isMongoId(),
    check('categoria').custom(existeCategoriaPorId),
    validarCampos
], crearProducto);  

//actualizar  producto por id- privado - cualquier persona con un token válido
router.put('/:id',[
    validarJWT,
    check('id', 'NO es un id válido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
] , actulizarProducto);  

//borrar  producto por id- admin
router.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'NO es un id válido').isMongoId(),
    check('id').custom(existeProductoPorId),
    validarCampos
], productoDelete);  

module.exports= router;