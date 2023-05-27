console.clear();
console.log('===============')
console.log('==TABLA DEL 4==')
console.log('===============')
const multiplicacion = (num) =>{
    operacion = num * 5
    return operacion
} 

for (let i = 1; i <= 10; i++) {
    console.log(`5 x ${i} =` ,multiplicacion(i));
}
