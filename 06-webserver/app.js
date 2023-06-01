const express = require('express');
const hbs = require('hbs');

const app = express();
const port = 8080;

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//servir contenido estatico 
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home',{
        nombre: 'Alicia granados',
        titulo: 'Curso de node'
    })
});
app.get('/generic', (req, res) => {
    res.render('generic',{
        nombre: 'Alicia granados',
        titulo: 'Curso de node'
    })
});

app.get('/elements', (req, res) => {
    res.render('elements',{
        nombre: 'Alicia granados',
        titulo: 'Curso de node'
    })
});

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(port , () =>{
    console.log(`example app listening at http://localhost:${port}`)
})