const {Router} = require('express');
const {check } = require('express-validator');
const { usuariosGet,
    usuariosPut, 
    usuariosDelete,
    usuariosPost, 
    usuariosPatch 
} = require('../controles/usuarios');
const { validarCampos } = require('../middlewares/validar_campos');
const Role = require('../models/role');

const router = Router();

router.get('/', usuariosGet);  

router.post('/', [
    check('nombre','El nombre es obligatorio').not().isEmpty() ,
    check('password','El password es obligatorio y mas de seis letras').isLength({min : 6}) ,
    check('correo','El correo no es válido').isEmail() ,
    //check('rol','No es un rol válido').isIn(['ADMIN_ROLE','USER_ROLE']) ,
    check('rol').custom(async ( rol = '' )  => {
        const existeRol = await Role.findOne({rol});
        if(!existeRol){
            throw new Error(`EL rol ${rol} no está registado en la BD`)
        }
    }),
    validarCampos
], usuariosPost); 

router.put('/:id', usuariosPut ); 

router.patch('/', usuariosPatch ); 

router.delete('/', usuariosDelete ); 



module.exports=  router; 