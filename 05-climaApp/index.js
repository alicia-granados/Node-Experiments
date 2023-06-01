import colors from 'colors';
import 'dotenv/config';

import { 
    inquirerMenu,
    leerInput,
    listarLugares,
    pausa
} from './helpers/inquirer.js';
import { Busquedas } from './models/busquedas.js';


const main = async() =>{

    let opt ;
    const busquedas = new Busquedas();

    do {
        //imprimier el menu
        opt = await inquirerMenu();
    
        switch (opt) {
          case 1:
            //Mostrar mensaje
            const termino = await leerInput('Ciudad: ');
    
            //Buscar los lugares
            const lugares = await busquedas.ciudad(termino);

            //seleccionar el lugar
            const id = await listarLugares(lugares);
            const lugareSel = lugares.find(l => l.id === id);
            console.log(lugareSel);

            //clima

            //mostrar rresultados
            
            console.log('\nInformación de la ciudad\n'.green);
            console.log('Ciudad: ', lugareSel.nombre);
            console.log('Lat: ', lugareSel.lat );
            console.log('Lng: ', lugareSel.lng);
            console.log('Temperatura: ', );
            console.log('Mínima: ', );
            console.log('Maxíma: ', );

            break;
          case '2':
          break;
        }
        await pausa();
      } while (opt !== 0);
    
}

main();