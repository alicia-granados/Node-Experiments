const http = require('http');

http.createServer(( req, res) =>{
    console.log(req);

    //res.writeHead(200, {'Content-Type': 'text/plain'});
    /* res.writeHead(200, {'Content-Type': 'application/json'});
    const persona={
        id:1,
        nombre:'Fer'
    }

    res.write(JSON.stringify(persona))*/
    res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
    res.write('1,nombre\n');
    res.write('2,adsa\n');

    res.end()
})
.listen(8080);

console.log('Escuchando en el puerto 80')