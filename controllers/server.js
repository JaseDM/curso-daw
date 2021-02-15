

const getInicio = (req, res) => {
    res.render('home');

}

const getAuth = (req, res) => {
    res.render('authentication');
}

const getAccount = (req, res) => {
    res.render('account');
}

const getOrders = (req, res) => {
    res.render('orders');
}

const getProduct = (req, res) => {
    res.render('product');
}

const getShop = (req, res) => {
    res.render('shop');
}

const getWishList = (req, res) => {
    res.render('wishlist');
}

const getCart = (req, res) => {
    res.render('cart');
}





const getError = (req, res) => {
    res.render('404', {
        titulo: 'Dessarrollo de aplicaciones web',
        nombre: 'Error'
    });
}





module.exports = {
    getInicio,
    getError,
    getAccount,
    getAuth,
    getOrders,
    getProduct,
    getShop,
    getWishList,
    getCart
}