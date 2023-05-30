import inquirer from 'inquirer';
 
import colors from 'colors';
 
const menuOpts = [
  {
    type: 'list',
    name: 'opcion',
    message: 'Seleccione una opción',
    choices: [
      'Crear tarea',
      'Listar tareas',
      'Listar tareas completadas',
      'Listar tareas pendientes',
      'Completar tarea(s)',
      'Eliminar tarea(s)',
      'Salir',
    ],
  },
];
 
const inquirerMenu = async () => {
  console.clear();
  console.log('==========================='.green);
  console.log('   Seleccione una opción'.green);
  console.log('===========================\n'.green);
 
  const opt = await inquirer.prompt(menuOpts);
 
  return opt;
};
 
export { inquirerMenu };
