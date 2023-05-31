import colors from 'colors';
import { 
    inquirerMenu,
    leerInput,
    pausa,
    } from './helpers/inquirer.js';
import { Tareas } from './models/tareas.js';
import { guardarDB,leerDB } from './helpers/guardarArchivos.js';

const main = async () => {

  let opt = '';
  const tareas = new Tareas();

  const tareasDB = leerDB();
  if( tareasDB ){
    //cargar tareas
    tareas.cargarTareasFromArray(tareasDB);
  }

  do {
    //imprimier el menu
    opt = await inquirerMenu();

    switch (opt) {
      case '1':
        //crear opcion
        const desc = await leerInput('Descripcion: ');
        tareas.crearTarea(desc);
        break;
      case '2':
        console.log(tareas.listadoArr);
      break;

    }

    guardarDB(tareas.listadoArr)
    await pausa();
  } while (opt !== '');

};
 
main();