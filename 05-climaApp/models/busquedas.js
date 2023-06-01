import axios from 'axios';

class Busquedas{
    historial = ['mexico','san jose'];

    constructor(){
        //leer db si existe
    }

    get paramsMapbox () {
        return { 
            'access_token' : process.env.MAPBOX_KEY,
            'limit' : 5,
            'languaje': 'es'
        }
    }

    get paramsWeather () {
        return {
            appid : process.env.OPENWEATHER_KEY,
            units : 'metric',
            lang: 'es'
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

            return  resp.data.features.map(lugar =>({
                id: lugar.id,
                nombre: lugar.place_name,
                lng: lugar.center[0],
                lat: lugar.center[1]
            }));
            
        } catch ( error) {
            return [];
        }

    }
    async climaLugar (lat, lon ){
        try {
            //Petición HTTP
            const intance = axios.create({
                baseURL : `https://api.openweathermap.org/data/2.5/weather`,
                params : { ...this.paramsWeather, lat, lon }
            })

            const resp = await intance.get();

            const {weather, main} = resp.data;
            
            return  {
                desc: weather[0].description,
                min:  main.temp_min,
                max: main.temp_max,
                temp: main.temp
            }
        
        } catch ( error) {
            console.log(error);
        }
    }
    

}
export {Busquedas}