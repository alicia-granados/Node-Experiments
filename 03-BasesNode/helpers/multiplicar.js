const fs = require('fs');

const crearArchivo = ( base = 5 ) => {
    return promesa = new Promise((resolve, reject)=>{
        console.log('===============')
        console.log(`  TABLA DEL:` , base)
        console.log('===============')
        let salida = ''; 
        for (let i = 1; i <= 10; i++) {
            salida += `${base} x ${i} = ${base *  i }\n`;
        }
        
        console.log(salida);
        
        fs.writeFileSync(`tabla-${base}.txt`, salida);
    
        ( salida )
            ? resolve( console.log(`tabla-${base}.txt creado`) )
            :
            reject( `No existe archivo creado`)
            
        
    });
    
}




module.exports = {
    crearArchivo,
}