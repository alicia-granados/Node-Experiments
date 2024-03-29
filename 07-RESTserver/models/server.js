const express = require('express');
var cors = require('cors');
const fileUpload = require('express-fileupload');
const { dbConnection } = require('../database/config');

class Server {
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.paths = {

            usuarios: '/api/usuarios',
            auth: '/api/auth',
            buscar: '/api/buscar',
            categorias: '/api/categorias',
            productos: '/api/productos',
            uploads: '/api/uploads'
        }

        // conectar a la base d e datos
        this.conectarDb();
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

        //Parseo y lectura del body
        this.app.use( express.json());

        //directorio publico
        this.app.use(express.static('public'));

        //FileUpload - carga de archivos
        this.app.use(fileUpload({
            useTempFiles : true,
            tempFileDir : '/tmp/',
            createParentPath:true
        }));

    }

    routes(){
        
        this.app.use(this.paths.auth , require('../routes/auth'))
        this.app.use(this.paths.buscar , require('../routes/buscar'))
        this.app.use(this.paths.usuarios , require('../routes/usuarios'))
        this.app.use(this.paths.categorias , require('../routes/categorias'))
        this.app.use(this.paths.productos , require('../routes/productos'))
        this.app.use(this.paths.uploads , require('../routes/uploads'))
    
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en el puerto',this.port)
        });
    }
}

module.exports = Server;