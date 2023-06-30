const { Socket } = require("socket.io")
const { comprobarJWT } = require("../helpers")

const socketControler = async (socket ) => {
    //console.log('cliente conectado',socket.handshake.headers['x-token'] );
    const usuario =await comprobarJWT(socket.handshake.headers['x-token']);
    if(!usuario){
        return socket.disconnect();
    }

    console.log('se conecto ', usuario.nombre)
}

module.exports = {
    socketControler
}