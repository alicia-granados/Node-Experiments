console.log('Inicio de programa'); //1

setTimeout( () => {
    console.log('Primer Timeout'); //3
}, 3000);

setTimeout( () => {
    console.log('Segundo Timeout'); //4 
}, 3000);

setTimeout( () => {
    console.log('Tercer Timeout'); //5
}, 3000);

console.log('Fin de programa'); //2 
