const url = ( window.location.hostname.includes('localhost'))
            ? 'http://localhost:8080/api/auth/'
            : 'https://restserver-curso-alicia.herokuapp.com/api/auth/';


let usuario = null;
let socket = null;

// validar el token del localstorage
const  validarJWT  = async () => {
    const token = localStorage.getItem('token') || '';
    if( token.length <=10 ){
        window.location = 'index.hmtl'
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

    const socket = io({
        'extraHeaders': {
            'x-token': localStorage.getItem('token')
        }
    });

}

const main = async () =>{
    //validar JWT
    await validarJWT();

}

main();



