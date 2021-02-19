

const getInicio = (req, res) => {
    res.render('home', {
        title: 'WEAR FOR CLUBER'
    });

}

const getAuth = (req, res) => {
    res.render('authentication'), {
        title: 'Login'
    };
}

const getAccount = (req, res) => {
    res.render('account', {
        title: 'Account'
    });
}

const getOrders = (req, res) => {
    res.render('orders', {
        title: 'Orders'
    });
}

const getProduct = (req, res) => {
    res.render('product', {
        title: 'Products'
    });
}

const getShop = (req, res) => {
    res.render('shop', {
        title: 'Shop'
    });
}

const getWishList = (req, res) => {
    res.render('wishlist', {
        title: 'Whislist'
    });
}

const getCart = (req, res) => {
    res.render('cart', {
        title: 'Cart'
    });
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