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
    const empleado = empleados.find( (e) => e.id === id )?.nombre;

    if ( empleado ){
        callback( null, empleado);
    }else{
        callback(`Empleado con id ${id} no existe`)
    } 
}

const getSalario = ( id , callback ) => {
    const salario = salarios.find( s => s.id === id )?.salario ;
  
    if ( salario ){
        callback(null,`El empleado con el ${id}, su sueldo es de ${salario}` );
    } else{
        callback(`El empleado con el ${id} no tiene sueldo`);
    }
}

const id = 1;
getEmpleado(id, (err, empleado ) =>{
    if ( err ){
        console.log('ERROR');
        return console.log(err);
    }

    getSalario(id, (err, salario ) =>{
        if ( err ){
            return console.log(err);
        }
        console.log('El empleado:' , empleado , 'tiene un salario de: ', salario);
    });
});

