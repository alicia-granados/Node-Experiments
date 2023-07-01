var socket = io();

let params = new URLSearchParams( window.location.search);

if( !params.has ('nombre')){
    window.location = 'index.html';
    throw new Error('EL nombre es necesario');
}

let usuario = {
    nombre: params.get('nombre')
}

socket.on('connect', function() {
    console.log('Conectado al servidor');
    socket.emit('entrarChat', usuario , function (resp ){
        console.log('Usuarios conectados ', resp)
    })
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información 
/**
socket.emit('crearMensaje', {
    usuario: 'Fernando',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});*/

// Escuchar información
socket.on('crearMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});

//escuchar cambioos de usuarios - cuando un usuario entra o sale del chat
socket.on('listaPersona', function(personas) {
    console.log( personas);
});