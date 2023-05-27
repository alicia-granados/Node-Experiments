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

const getSalario = ( id ) => {

    return promesa = new Promise((resolve, reject)=>{
        const salario = salarios.find( s => s.id === id )?.salario ;

        ( salario )
            ? resolve( salario )
            :
            reject( `No existe salario con id ${id}`)
        
    });
    
}

const getInfoUsuario = async () => {
    try {
        const empleado = await getEmpleado(id);
        const salario = await getSalario(id)
        return `El  salario del empleado: ${empleado} es de ${salario}`
    }catch (error){
        throw error
    }
}

const id = 3; 
getInfoUsuario()
    .then(msg => {
        console.log('TODO BIEN')
        console.log(msg)
    })
    .catch(err => {
        console.log('TODO MAL')
        console.log(err)
    })