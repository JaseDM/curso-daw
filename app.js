// Inportaciones 
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
 
// Inicialización
const app = express();
const port = process.env.PORT;



// configuración 
// Handlebars
app.set('view engine', 'hbs'); // Seteamos hbs como render html
hbs.registerPartials(__dirname + '/views/partials');





// Middelware

// Servir contenido estatico
app.use( express.static('public'))


app.get('/', (req, res) => {
  res.render('home', {
      titulo: 'Dessarrollo de aplicaciones web',
      nombre: 'José Miguel'
  });
})


app.get('/generic', (req, res) => {
    res.render('generic', {
        titulo: 'Dessarrollo de aplicaciones web',
        nombre: 'Generic'
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        titulo: 'Dessarrollo de aplicaciones web',
        nombre: 'Ellements'
    });
})


// Peticiones no encontradas
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
})






// Inicio de servidor
app.listen(port, () =>{
    console.log(`Servidor corriendo por el puerto ${port}`);
});
