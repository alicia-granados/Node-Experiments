const dbValidators = require('./db-validation');
const generarJWT = require('./generarJWT');
const googleVerify = require('./google-verify');
const subirArchivo = require('./subir-archivo');

module.exports= {
    ...dbValidators,
    ...generarJWT,
    ...googleVerify,
    ...subirArchivo
}