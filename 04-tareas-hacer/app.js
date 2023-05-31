import colors from 'colors';
import { 
    inquirerMenu,
    leerInput,
    pausa,
    listadoTareasBorrar
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
        tareas.listadoCompleto();
      break;
      case '3':
        tareas.listarPendientesCompletadas(true);
      break;
      case '4':
        tareas.listarPendientesCompletadas(false);
      break;
      case '6':
        const id =  await listadoTareasBorrar( tareas.listadoArr);
        console.log({id})
      break;

    }

    guardarDB(tareas.listadoArr)
    await pausa();
  } while (opt !== '');

};
 
main();