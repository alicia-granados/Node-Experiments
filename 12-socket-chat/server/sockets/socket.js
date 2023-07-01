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
        client.broadcast.emit('listaPersona', usuarios.getPersonas());
        callback(personas);

    });

    client.on('disconnect', () => {

        let personaBorrada = usuarios.borrarPersona(client.id);

        client.broadcast.emit('crearMensaje', {usuario : 'Administrador', mensaje: `${personaBorrada.nombre} abandono el chat`})
        client.broadcast.emit('listaPersona', usuarios.getPersonas())
        
    });

});