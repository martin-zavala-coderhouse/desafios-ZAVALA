



class ProductManager{
    #products;
    static idProducto = 0;



    constructor(){
        this.#products = [];
    }


    addProduct(title, description, price, thumbnail, code, stock)   {

        if(!title || !description || !price || !thumbnail || !code || !stock)
        return 'todos los parametros son requeridos [title, description, price, thumbnail, code, stock]'        
    
      const codeRepetido = this.#products.some(p=> p.code == code);   
      if (codeRepetido)
      return `El codigo ${code} ya se encuentra registrado en otro producto`

ProductManager.idProducto = ProductManager.idProducto +1;
        const id = ProductManager.idProducto;
        const nuevoProducto = {
            id:id,
            title:title,
            description:description,
            price:price,
            thumbnail:thumbnail,
            code:code,
            stock:stock
        };
        this.#products.push(nuevoProducto);


        return 'Producto Agregado Exitosamente!';
        }

    



    getProducts(){
        return this.#products;
    }



    getProductById(id){
        const producto = this.#products.find(p => p.id == id);
        if (producto)
            return producto;
        else
            return `Not Found del producto con id ${id}`;
    }
}



module.exports = ProductManager;



