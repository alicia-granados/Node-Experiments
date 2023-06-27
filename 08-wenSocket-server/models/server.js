const express = require('express');
var cors = require('cors');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {
        }


        //Middlewares
        this.middlewares();

        //rutas de aplicacion
        this.routes();
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

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto',this.port)
        });
    }
}

module.exports = Server;