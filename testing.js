




const ProductManager = require("./productManager");



const producto = new ProductManager();

    // console.log(producto.getProductById(1));




    console.log(producto.addProduct('lapto', 'lenovo 29', 5000, 'http://img1.com', 's23hg6', 20));
    console.log(producto.addProduct('lapto', 'hp', 5000, 'http://img1.com', 's23hg7', 25));
    console.log(producto.addProduct('lapto', 'hp2', 5000, 'http://img1.com', 's23hg8', 25));
    
    // console.log(producto.getProducts());
    console.log(producto.getProductById(3));


    // console.log(producto.deleteProduct(3));


    const productoActualizar = {
        "id":30,
        "title": "Lapto 3",
        "description": "hp 39",
        "price": "100",
        "thumnail": "https://img10.com",

    }



    console.log(producto.updateProduct(3, productoActualizar));