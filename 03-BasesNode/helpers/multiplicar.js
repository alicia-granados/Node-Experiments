const fs = require('fs');
const colors = require('colors');

const crearArchivo = async( base = 5 , listar = false) => {
    try{
        let salida = ''; 
        for (let i = 1; i <= 10; i++) {
            salida += `${base} ${'x'.yellow} ${i} ${'='.blue} ${base *  i }\n`.underline.red;
        }

        if (listar){
            console.log('==============='.green)
            console.log(`  TABLA DEL:`.red ,colors.cyan(base) )
            console.log('==============='.green)
            console.log(salida);
        }
            
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `tabla-${base}.txt creado`.rainbow; 
         
    }catch (error) {
        throw error
    }
    
}




module.exports = {
    crearArchivo,
}