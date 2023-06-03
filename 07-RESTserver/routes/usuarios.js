const {Router} = require('express');
const { usuariosGet,
    usuariosPut, 
    usuariosDelete,
    usuariosPost, 
    usuariosPatch 
} = require('../controles/usuarios');

const router = Router();

router.get('/', usuariosGet);  

router.post('/', usuariosPost); 

router.put('/', usuariosPut ); 

router.patch('/', usuariosPatch ); 

router.delete('/', usuariosDelete ); 



module.exports=  router; 