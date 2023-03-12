import mongoose from 'mongoose'

//create schema and mode 

let userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true }
})
let User = mongoose.model("users", userSchema)

export default User