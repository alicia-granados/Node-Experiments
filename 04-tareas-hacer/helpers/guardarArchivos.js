import * as fs from 'fs';

const guardarDB = ( data ) => {
    const archivo = './db/data.txt';

    fs.writeFileSync(archivo ,JSON.stringify(data));
}
export  {
    guardarDB
}