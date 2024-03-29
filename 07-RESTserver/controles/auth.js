const {response } = require('express');
const  bycryptjs = require('bcryptjs');
const Usuario  = require('../models/usuario');
const { generarJWT } = require('../helpers/generarJWT');
const { googleVerify } = require('../helpers/google-verify');

const login = async (req, res = response) => {

    const {correo, password} = req.body;

    try{
        //verificar si el email existe
        const usuario = await Usuario.findOne({correo});

        if ( !usuario ){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });
        }
        //si el usurio esta activo.
        if ( !usuario.estado  ){
            return res.status(400).json({
                msg: 'Usuario / no son correctos - estado : false'
            })
        }
         
        //verificar la contraseña
        const validPassword = bycryptjs.compareSync(password, usuario.password);

        if( !validPassword ){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            });
        }

        //generar el JWT
        const token = await generarJWT(usuario.id);

        res.json ({
            msg : 'LOGIN ok',
            token
        })

    } catch (error){

        console.log(error)
        return res.status(500).json({
            msg: 'Hable con el admin'
        })

    }


}

const googleSignIn = async ( req, res = response) =>{
    const {id_token} = req.body;

    try {
        const { correo, nombre, img } = await googleVerify( id_token );
 
        let usuario = await Usuario.findOne({ correo });
 
        if ( !usuario ) {
            // Tengo que crearlo
            const data = {
                nombre,
                correo,
                password: ':P',
                img,
                google: true
            };
 
            usuario = new Usuario( data );
            await usuario.save();
        }
 
        // Si el usuario en DB
        if ( !usuario.estado ) {
            return res.status(401).json({
                msg: 'Hable con el administrador, usuario bloqueado'
            });
        }
 
        // Generar el JWT
        const token = await generarJWT( usuario.id );
        
        res.json({
            usuario,
            token
        });
        
    } catch (error) {
 
        res.status(400).json({
            msg: 'Token de Google no es válido',
            error
        })
    }

}

module.exports ={
    login,
    googleSignIn
}