import mongoose from 'mongoose'
let productSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String, required: true
    }, image: {
        type: String, required: true
    }, price: {
        type: Number, required: true
    },
    qty: {
        type: Number, required: true
    }
})
let Product = mongoose.model("products", productSchema)

export default Product