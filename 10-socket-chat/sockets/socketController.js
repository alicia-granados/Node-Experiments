const { Socket } = require("socket.io")
const { comprobarJWT } = require("../helpers")
const {ChatMensaje} = require('../models');

const chatMensajes = new ChatMensaje();

const socketControler = async (socket  = new Socket(),io) => {
    //console.log('cliente conectado',socket.handshake.headers['x-token'] );
    const usuario =await comprobarJWT(socket.handshake.headers['x-token']);
    if(!usuario){
        return socket.disconnect();
    }

    //console.log('se conecto ', usuario.nombre)
    //agregar  el usuario conectado
    chatMensajes.conectarUsuario(usuario);
    io.emit('usuarios-activos', chatMensajes.usuariosArr )
    socket.emit('recibir-mensajes', chatMensajes.Ultimos10)
    
    // limpiar cuando alguien se desconecta
    socket.on('disconnect', () =>{
        chatMensajes.desconectarUsuario(usuario.id);
        io.emit('usuarios-activos', chatMensajes.usuariosArr );
    })

    socket.on('enviar-mensaje', ({uid, mensaje}) =>{
        chatMensajes.enviarMensaje(usuario.id, usuario.nombre, mensaje);
        io.emit('recibir-mensajes' ,chatMensajes.Ultimos10);
    })
}

module.exports = {
    socketControler
}