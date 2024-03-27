import express from "express";
import ProductManager from "./productManager.js";



const app = express();
const PORT = 8080;



app.get('/products',(req,res)=>{
    const {limit} = req.query;
    // console.log({limit});
    const p = new ProductManager();
    // const productos = p.getProducts();
    // return res.json({prod:productos});
    return res.json({ productos: p.getProducts(limit)});
});



app.get('/products/:pid',(req,res)=>{
    const { pid } = req.params;
    const p = new ProductManager();
    // const producto = p.getProductById(Number(pid));
    // console.log({pid});
    // return res.json({producto});
    return res.json({producto: p.getProductById(Number(pid))});

});



app.listen(PORT,()=>{
    console.log(`Corriendo aplicacion en el puerto ${PORT}`);
});