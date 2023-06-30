import express,{Application} from 'express';
import userRoutes from '../routes/usuario';
import cors from 'cors';

class Server {
    private app: Application;
    private port: string;
    private  apiPaths = {
        usuarios: '/api/usuarios'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8080';

        //metodos inciales
        this.middlewares();
        this.routes();
    }
    // TODO: conectar base de datos 
    
    middlewares(){
        //cors
        this.app.use(cors());

        //lectura del body
        this.app.use(express.json());

        //carpeta publica
        this.app.use(express.static('public'));

    }
    routes(){
        this.app.use( this.apiPaths.usuarios, userRoutes)
    }
    listen(){
        this.app.listen(this.port, () =>{
            console.log('servidor corriendo en el puerto' + this.port)
        })
    }
}

export default Server;