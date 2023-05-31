import colors from 'colors';
import { 
    inquirerMenu,
    leerInput,
    pausa
} from './helpers/inquirer.js';

const main = async() =>{

    let opt ;

    do {
        //imprimier el menu
        opt = await inquirerMenu();
    
        switch (opt) {
          case '1':
            //crear tarea
            const desc = await leerInput('Descripcion: ');
            console.log(desc)
            break;
          case '2':
          break;
        }
        await pausa();
      } while (opt !== 0);
    
}

main();