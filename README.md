# WebServer + RestServer

Descripción del proyecto: 

Práctica para la finalización del módulo MF0492_3: Programación web en el entorno servidor para el curso  18/5683 IFCD0210 Desarrollo de aplicaciones con tecnología web.

La finalidad de esta práctica es la de crear un WebServer que sirva contenido estático y consuma los servicios de un RestServer desplegado en Heroku para la visualización de contenidos segun el rol del usuario

Patrón - Model View Controller

JavaScript - Nodejs - Express - Handlerbars

Programación estructurada

Demo: [Heroku app](https://curso-daw.herokuapp.com/)

Para iniciar el proyecto instalar los modulos de Node ``` npm install ```



## Dependencias usadas en el proyecto 

### express
Descripción
 
Express es el framework web más popular de Node, y es la librería subyacente para un gran número de otros frameworks web de Node populares. Proporciona mecanismos para:

- Escritura de manejadores de peticiones con diferentes verbos HTTP en diferentes caminos URL (rutas).
- Integración con motores de renderización de "vistas" para generar respuestas mediante la introducción de datos en plantillas.
- Establecer ajustes de aplicaciones web como qué puerto usar para conectar, y la localización de las plantillas que se utilizan para renderizar la respuesta.
- Añadir procesamiento de peticiones "middleware" adicional en cualquier punto dentro de la tubería de manejo de la petición.

Instalación
``` npm install express```

Importación
``` const express = require('express')   ```

Inicialización 
``` const app = express() ```



Uso 

Iniciar el servidor
```
app.listen(port, () =>{
    console.log(`Servidor corriendo por el puerto ${port}`);
});
```
Peticiones get para servir contenidos a las diferentes URLs
```
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
```

### Handlebars

Descripción
Handlebars es un sistema de plantillas en Javascript que te permite crear y formatear código HTML de una manera muy sencilla. 

Instalación
 ``` npm install hbs ```


Importación
``` const hbs = require('hbs') ```

Uso
Handlebars para Node es un Middleware y la forma simple de uso es asociando una carpeta de vistas por medio del siguiente codigo 
```  
// configuración 
// Handlebars
app.set('view engine', 'hbs'); // Seteamos hbs como render html
hbs.registerPartials(__dirname + '/views/partials');
 ```

 ### Dotenv

 Instalación
 ``` npm install dotenv```

 Importación
 ``` require('dotenv').config() ```

 Descripción
 Módulo que carga variables de entorno desde un archivo .env a process.env

 Uso 
 Declaración y uso de las variables en el archivo .env
 ``` PORT=8080 ``` 
 ``` process.env.PORT ```


