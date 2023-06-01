const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Home Page')
});
app.get('/hola-mundo', (req, res) => {
    res.send('Hola mundo en su respectiva ruta')
});
app.get('*', (req, res) => {
    res.send('404 | page not found')
});

app.listen(8080)