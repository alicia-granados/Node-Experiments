const url = ( window.location.hostname.includes('localhost'))
            ? 'http://localhost:8080/api/auth/'
            : 'https://restserver-curso-alicia.herokuapp.com/api/auth/';


let usuario = null;
let socket = null;

//Referencias html
const txtUid = document.querySelector('#txtUid');
const txtMensaje = document.querySelector('#txtMensaje');
const ulUsuarios = document.querySelector('#ulUsuarios');
const ulMensaje = document.querySelector('#ulMensaje');

// validar el token del localstorage
const  validarJWT  = async () => {
    const token = localStorage.getItem('token') || '';
    if( token.length <=10 ){
        window.location = 'index.html'
        throw new Error('No hay token en el servidor')
    }

    const resp = await fetch(url, {
        headers: { 'x-token' : token}
    });

    const { usuario:userDB,  token: tokenDB} = await resp.json();
    localStorage.setItem('token', tokenDB)
    //console.log(userDB, tokenDB)
    usuario= userDB;

    document.title = usuario.nombre;
    await conectarSocket();
}

const conectarSocket = async() =>{

    socket = io({
        'extraHeaders': {
            'x-token': localStorage.getItem('token')
        }
    });

    socket.on('connect', () => {
        console.log('Sockets online')
    });

    socket.on('disconnect', () => {
        console.log('Sockets offline')
    });

    socket.on('recibir-mensajes' , dibujarMensajes );

    socket.on('usuarios-activos' , (payload) => {
        //TODO: 
        dibujarUsuarios(payload);
    });

    socket.on('mensaje-privado' , (payload) => {
        //TODO: 
        console.log('Privado: ', payload)
    })
}
const  dibujarUsuarios = (usuarios = [] ) =>{
    let usersHTML= '';
    usuarios.forEach(({nombre, uid}) =>{
        usersHTML += `
            <li>
                <p>
                    <h5 class="text-success" > ${nombre}</h5>
                    <span class=" fs-6 text-muted">${uid}</span>
                </p>
            </li>
        `;
    });

    ulUsuarios.innerHTML = usersHTML;
}
const  dibujarMensajes = (mensajes = [] ) =>{
    //console.log(mensajes)
    let mensajesHTML= '';

    mensajes.forEach(({nombre, mensaje}) =>{
        mensajesHTML += `
            <li>
                <p>
                    <span class="text-primary" > ${nombre}:</span>
                    <span +>${mensaje}</span>
                </p>
            </li>
        `;
    });

    ulMensaje.innerHTML = mensajesHTML;
}


txtMensaje.addEventListener('keyup', ({keyCode}) =>{
    const mensaje = txtMensaje.value;
    const uid = txtUid.value;
    if( keyCode !==13 ){return ;}
    if(mensaje.length === 0) { return; }

    socket.emit('enviar-mensaje', {mensaje, uid})
    txtMensaje.value = ''
})

const main = async () =>{
    //validar JWT
    await validarJWT();

}

main();



