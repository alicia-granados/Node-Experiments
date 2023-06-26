const {Router} = require('express');
const {check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar_campos');
const { cargarArchivo } = require('../controles/uploads');

const router = Router();

router.post('/', cargarArchivo);  

module.exports= router;