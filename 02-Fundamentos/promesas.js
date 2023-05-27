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
const id = 2 ; 

const getSalario = ( id ) => {

    return promesa = new Promise((resolve, reject)=>{
        const salario = salarios.find( s => s.id === id )?.salario ;

        ( salario )
            ? resolve( salario )
            :
            reject( `No existe salario con id ${id}`)
        
    });
    
}
/*
getEmpleado(id)
    .then( empleado => console.log( empleado ))
    .catch( err => console.log(err))
getSalario(id)
    .then( salario => console.log( salario ))
    .catch( err => console.log(err))
*/
getEmpleado(id)
    .then(empleado => {
        getSalario(id)
        .then(salario =>{
            console.log('El empleado: ', empleado, 'tiene un salario de: ', salario)
        })
        .catch( err => console.log(err))
    })
    .catch( err => console.log(err))