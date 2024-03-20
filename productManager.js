const fs = require('fs')


class ProductManager{
    #products;
    #path;
    static idProducto = 0;

    constructor(){
        this.#path = "./data/productos.json";
        this.#products = this.#leerProductosInFile();
    }



    #leerProductosInFile(){
        try {
            if (fs.existsSync(this.#path)) 
                return JSON.parse(fs.readFileSync(this.#path, 'utf-8'));
            return [];
        } catch (error) {
            console.log(`ocurrio un error al momento de leer el archivo de productos, ${error}`);
        }
    }

    #guardarArchivo(){
        try {
            fs.writeFileSync(this.#path, JSON.stringify(this.#products));
        } catch (error) {
            console.log(`ocurrio un error al momento de guardar el archivo de productos, ${error}`);
        }

    }


    addProduct(title, description, price, thumbnail, code, stock)   {

        if(!title || !description || !price || !thumbnail || !code || !stock)
        return 'todos los parametros son requeridos [title, description, price, thumbnail, code, stock]'        
    
      const codeRepetido = this.#products.some(p=> p.code == code);   
      if (codeRepetido)
      return `El codigo ${code} ya se encuentra registrado en otro producto`;
    
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
        this.#guardarArchivo();


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




updateproduct(id, objetoupdate){
    let msg = `El producto con id ${id} no existe`;

    const index = this.#products.findIndex(p=> p.id === id);
    if(index !== -1) {
        const {id, ...rest} = objetoupdate;
        this.#products[index] = {...this.#products[index], ...rest}
        this.#guardarArchivo();
        msg = 'Producto actualizado!';
    }

}
deleteproduct(id){
    let msg = `El producto con id ${id} no existe`;
    const index = this.#products.findIndex(p=> p.id === id);
    if(index !== -1) {
        this.#products = this.#products.filter(p=> p .id !== id);
        this.#guardarArchivo();
        msg = `Producto Eliminado!`;
    }
return msg
}
}
module.exports = ProductManager;



