// destructuracion de objeto
const deadpool= {
    nombre : 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    //edad: 50,
    getNombre()  {
        return `${this.nombre} ${this.apellido} ${this.poder}`;
    }
}
console.log(deadpool.getNombre());

const {nombre, apellido, poder, edad = 0 } = deadpool;
console.log(nombre, apellido, poder,  edad);


function imprimeHeroe( heroe ){
    const {nombre, apellido, poder, edad = 0 } = deadpool;
    console.log(nombre, apellido, poder,  edad)
}
imprimeHeroe(deadpool);

//Destructuracion de arreglo

const heroes = ['Deadpool','Superman','Batman'];
//const h1 = heroes[0];
const [,,h3] = heroes
console.log(h3)