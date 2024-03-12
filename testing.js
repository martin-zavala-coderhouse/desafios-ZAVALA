




const ProductManager = require("./productManager");



const producto = new ProductManager();

    // console.log(producto.getProductById(1));




    console.log(producto.addProduct('lapto', 'lenovo 29', 5000, 'http://img1.com', 's23hg6', 20));
    console.log(producto.addProduct('lapto', 'hp', 5000, 'http://img1.com', 's23hg7', 25));
    
    console.log(producto.getProducts());


