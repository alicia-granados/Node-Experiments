import axios from 'axios';

class Busquedas{
    historial = ['mexico','san jose'];

    constructor(){
        //leer db si existe
    }

    get paramsMapbox () {
        return{
            'access_token' : process.env.MAPBOX_KEY,
            'limit' : 5,
            'languaje': 'es'
        }
    }

    async ciudad(lugar= ''){
        try{
            //Petición HTTP
            const intance = axios.create({
                baseURL : `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params :this. paramsMapbox
            })

            const resp = await intance.get();
            console.log( resp.data);
            return []; // retornar los lugares
        } catch ( error) {
            return [];
        }

    }

}
export {Busquedas}