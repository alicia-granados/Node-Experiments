import * as fs from 'fs';

const guardarDB = ( data ) => {
    const archivo = './db/data.json';

    fs.writeFileSync(archivo ,JSON.stringify(data));
}
export  {
    guardarDB
}