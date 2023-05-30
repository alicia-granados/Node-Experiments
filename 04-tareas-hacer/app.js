import colors from 'colors';
import { 
    inquirerMenu,
    leerInput,
    pausa,
    } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';

console.clear();
 
const main = async () => {

  let opt = '';
  const tareas = new Tareas();

  do {
    opt = await inquirerMenu();

    switch (opt) {
        case '1':
            //crear opcion
            const desc = await leerInput('Descripcion: ');
            tareas.crearTarea(desc);
            break;
        case '2':
            console.log(tareas._listado);
            break;

    }

    await pausa();
  } while (opt !== '');

};
 
main();