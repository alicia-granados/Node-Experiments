//referencias del html
const lblonline = document.querySelector('#lblonline')
const lbloffline = document.querySelector('#lbloffline')
const txtmensaje = document.querySelector('#txtmensaje');
const btnenviar = document.querySelector('#btnenviar');

const socket = io();

//n escuchar eventos
socket.on('connect', () =>{
    console.log('Conectado');

    lbloffline.style.display = 'none';
    lblonline.style.display ='';
});

socket.on('disconnect', () =>{
    console.log('desconectado del servidor')
    lblonline.style.display = 'none';
    lbloffline.style.display ='';
});

btnenviar.addEventListener('click' ,() => {
    const mensaje  = txtmensaje.value;
    const payload ={
        mensaje,
        id: '123a',
        fecha : new Date().getTime()
    }
    socket.emit('enviar-mensaje' , payload)
});