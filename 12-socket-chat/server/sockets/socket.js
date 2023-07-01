const { io } = require('../server');
const {Usuarios } = require('../clases/usuarios');
const  {crearMensaje } = require('../utilidades/utilidades');

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


    client.on('crearMensaje', (data) => {

        let persona = usuarios.getPersona(client.id);
        let mensaje = crearMensaje( persona.nombre, data.mensaje);
        client.broadcast.emit('crearMensaje', mensaje);
      
    });

    client.on('disconnect', () => {

        let personaBorrada = usuarios.borrarPersona(client.id);

        client.broadcast.emit('crearMensaje', 'Administrador', `${personaBorrada.nombre} salió`)
        client.broadcast.emit('listaPersona', usuarios.getPersonas())
        
    });

});