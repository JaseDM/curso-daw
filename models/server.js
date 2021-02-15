const express = require('express');
const hbs = require('hbs');
const { 
    getInicio,
    getError,
    getAccount,
    getAuth,
    getOrders,
    getProduct,
    getShop,
    getWishList,
    getCart
 } = require('../controllers/server');
require('dotenv').config();



const app = express();
const port = process.env.PORT;

// Middleware 

app.set('view engine', 'hbs'); // Seteamos hbs como render html
hbs.registerPartials(__dirname + '/../views/partials');

app.use(express.static('public'))



app.get('/', getInicio);
app.get('/account', getAccount);
app.get('/authentication', getAuth);
app.get('/orders', getOrders);
app.get('/products', getProduct);
app.get('/shop', getShop);
app.get('/wishList', getWishList);
app.get('/cart', getCart);
app.get('*', getError);









app.listen(port, () =>{
    console.log(`Servidor corriendo por el puerto ${port}`)
})




module.exports = app;