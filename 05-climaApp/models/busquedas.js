import axios from 'axios';

class Busquedas{
    historial = ['mexico','san jose'];

    constructor(){
        //leer db si existe
    }

    async ciudad(lugar= ''){
        try{
            //Petición HTTP
            const resp = await axios.get('https://reqres.in/api/users?page=2');
            console.log( resp.data);
            return []; // retornar los lugares
        } catch ( error ) {
            return [];
        }

    }

}
export {Busquedas}