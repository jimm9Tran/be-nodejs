const ProductCategory = require("../../models/product-category.model");
const createTreeHelper = require("../../helpers/createTree");
const Cart = require("../../models/cart.model");

module.exports.cartId = async (req, res, next) => {
    
    if(!req.cookies.cartId) {
        const cart = new Cart();
        await cart.save();

        const expiresCookie = 30 * 24 * 60 * 60 * 1000;

        res.cookie("cartId", cart.id, {
            expires: new Date(Date.now() + expiresCookie)
        });
    }
        
    next();
}