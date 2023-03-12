import express, { response } from 'express'
import Product from '../model/Product.js'
let product_Router = express.Router()


product_Router.get("/test", (req, resp) => {
    resp.send("Routing")
})
/* 
Use:Single product
URL:localhost:8080/products/:id
method:Get
Req Fields: 
*/
product_Router.get("/id", async (req, resp) => {
    console.log(req.params.id)
    try {
        let productId = req.params.id
        let product = await Product.findById(productId)
        resp.status(200).json({ msg: "Displaying product", product: product })
    }
    catch (err) {

    }
})
/* 
Use:create product
URL:localhost:8080/products/
method:POST
Req Fields: name, image, price,qty
*/
product_Router.post("/", async (req, resp) => {
    console.log("Inside create product")
    try {
        var new_Product = {
            id: req.body.id,
            name: req.body.name,
            image: req.body.image,
            price: req.body.price,
            qty: req.body.qty
        }
        let product = Product(new_Product)
        product = await product.save()
        resp.status(200).json({ message: "product created", product: product })
    }
    catch (err) {
        if (err) throw err
        resp.status(500).json({ message: "unable to upload", err: err })
    }

})

product_Router.get("/", async (req, resp) => {
    console.log("test case 123")
    try {
        let products = await Product.find();
        resp.status(200).json({ products: products })
    }
    catch (err) {
        if (err) throw err
        resp.status(500).json({ message: "unable to Fetch", err: err })
    }
})
product_Router.delete("/id", async (req, resp) => {
    try {
        let productId = req.params.id;
        let product = await Product.findByIdAndDelete(productId)
        resp.status(200).json({ msg: "Delete buddy" })
    }
    catch (err) {

    }
})

export default product_Router;