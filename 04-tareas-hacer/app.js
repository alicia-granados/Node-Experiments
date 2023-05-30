import colors from 'colors';
import { inquirerMenu, pausa } from './helpers/inquirer.js';
import {Tarea}  from './models/tarea.js'
import { Tareas } from './models/tareas.js';
console.clear();
 
const main = async () => {

  let opt = '';

  do {
    //opt = await inquirerMenu();
    //console.log({ opt });
    const tareas = new Tareas();
    const tarea = new Tarea('comprar comida');
    tareas._listado[tarea.id] = tarea
    console.log(tareas);
    await pausa();
  } while (opt !== '');

};
 
main();