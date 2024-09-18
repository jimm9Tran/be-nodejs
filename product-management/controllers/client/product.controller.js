const Product = require("../../models/product.model")

module.exports.index = async (req, res) => {
    const products = await Product.find({
        // status: "active",
        // deleted: false
    });

    const newProducts = products.map(item => {
        item.priceNew = (item.price*100- item.price*item.discountPercentage);
        return item;
    })

    res.render("client/pages/products/index", {
        pageTitle: "Products",
        products: newProducts
    });
};