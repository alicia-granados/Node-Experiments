const express = require('express');
var cors = require('cors');
const { isAscii } = require('buffer');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.paths = {
        }


        //Middlewares
        this.middlewares();

        //rutas de aplicacion
        this.routes();

        //sockets
        this.sockets();

    }

    async conectarDb(){
        await dbConnection()
    }

    middlewares(){
        //cors
        this.app.use(cors());

        //directorio publico
        this.app.use(express.static('public'));

    }

    routes(){
        
        //this.app.use(this.paths.auth , require('../routes/auth'))
    
    }

    sockets(){
        this.io.on("connection", (socket) => {

            console.log('cliente conectado',socket.id);

            socket.on('disconnect', () => {
                console.log('cliente desconectado')
            });
            socket.on('enviar-mensaje' ,  (payload , callback ) => {
                //this.io.emit('enviar-mensaje', payload);
                const id= 1230;
                callback({id, fecha: new Date.getTime()});
            })
        });

    }

    listen(){
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto',this.port)
        });
    }
}

module.exports = Server;