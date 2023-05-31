import colors from 'colors';
import { 
    inquirerMenu,
    leerInput,
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
            const lugar = await leerInput('Ciudad: ');
            await busquedas.ciudad(lugar);
            //Buscar los lugares
            //seleccionar el lugar
            //clima
            //mostrar rresultados
            
            console.log('\nInformación de la ciudad\n'.green);
            console.log('Ciudad: ', );
            console.log('Lat: ', );
            console.log('Lng: ', );
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