import {Tarea}  from "./tarea.js";

class Tareas {
    _listado = { };

    get listadoArr() {
        const listado = [];
        Object.keys(this._listado).forEach(key =>{
            const tarea = this._listado[key];
            listado.push(tarea);
        });
        return listado;
    }

    constructor( ) {
        this._listado = {}
    }

    crearTarea ( desc = ''){
        const tarea = new Tarea(desc)
        this._listado[tarea.id]= tarea;
    }

    cargarTareasFromArray (tareas = []){
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }
    listadoCompleto(){
        this.listadoArr.forEach( (tarea, i) =>{
            const  indx = `${i+1}`.green;
            const {desc, completadoEn} = tarea;
    
            const estado = (completadoEn) ? 'completada'.green : 'pendiente'.red;

            console.log(`${indx} ${desc}:: ${estado}`)
        });
    }
}
export {Tareas};