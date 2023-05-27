const empleados = [
    {
        id:1,
        nombre: 'Fernando'
    },
    {
        id:2,
        nombre: 'Karen'
    },
    {
        id:3,
        nombre: 'Linda'
    },
];

const salarios = [
    {
        id:1,
        salario: 300
    },
    {
        id:2,
        salario: 400
    },
];

const getEmpleado = (id) =>{

    return promesa = new Promise((resolve, reject)=>{
        const empleado = empleados.find( (e) => e.id === id )?.nombre;

        ( empleado )
            ? resolve( empleado )
            :
            reject( `No existe empleado con id ${id}`)
        
    });

}
const id = 2; 

const getSalario = ( id ) => {

    return promesa = new Promise((resolve, reject)=>{
        const salario = salarios.find( s => s.id === id )?.salario ;

        ( salario )
            ? resolve( salario )
            :
            reject( `No existe salario con id ${id}`)
        
    });
    
}
let nombre; 
getEmpleado(id)
    .then(empleado => {
        nombre = empleado;
        return getSalario(id)
    })
    .then(salario => console.log(`El empleado: ${nombre} tiene un salario de: ${salario}`))
    .catch( err => console.log(err))