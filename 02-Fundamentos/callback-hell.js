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

const getEmpleado = (id, callback) =>{
    const empleado = empleados.find( (e) => e.id === id )

    if ( empleado ){
        callback( null, empleado);
    }else{
        callback(`Empleado con id ${id} no existe`)
    } 
}

getEmpleado(3, (err, empleado ) =>{
    if ( err ){
        console.log('ERROR');
        return console.log(err);
    }
    console.log('Empleado existe');
    console.log(empleado);
});