
const  validarCampos  = require('../middlewares/validar_campos');
const  validarJWT  = require('../middlewares/validar-jwt');
const  validaRoles  = require('../middlewares/validad-roles');

module.exports= {
    ...validarCampos,
    ...validarJWT,
    ...validaRoles
}