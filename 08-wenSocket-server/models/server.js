const express = require('express');
var cors = require('cors');

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

        });

    }

    listen(){
        this.server.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto',this.port)
        });
    }
}

module.exports = Server;