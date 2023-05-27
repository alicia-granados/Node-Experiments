const {crearArchivo} = require('./helpers/multiplicar');
const { options, boolean } = require('yargs');
const argv = require('yargs')
    .options (
        'b', {
            alias: 'base',
            type : 'number',
            demandOption: true,
        },
        'l',{
            alias: 'listar',
            type: 'boolean',
            demandOption: true,
            default: false
        }
    )
    .check((argv ,options)=>{
        if( isNaN ( argv.b )){
            throw 'La base tiene que ser un número'
        }
        return true
    })              
    .argv;

console.clear();

console.log(argv)

const base = 3;
crearArchivo(argv.b, argv.l )
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err))