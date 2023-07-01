const { io } = require('../server');
const {Usuarios } = require('../clases/usuarios');

const usuarios = new Usuarios();

io.on('connection', (client) => {

    client.on('entrarChat', (data, callback) =>{

        if (!data.nombre){
            return callback({
                error: true,
                mensjae: 'El nombre es necesario'
            })
        }

        let personas = usuarios.agregarPersonas(client.id, data.nombre);
        
        callback(personas);

    })

});