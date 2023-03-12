import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
let app = express()
dotenv.config({ path: './config/config.env' })
import product_Router from './routing/product_Router.js'
//loading environment variable using process variable
let port = process.env.PORT
let host = process.env.HOST

let mongourl = process.env.MONGO_LOCAL_URL

// configure express to receive the form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//create root api
app.get("/", (req, resp) => {
    resp.send("express app - is running successfully")
})

app.use("/products", product_Router)
mongoose.connect(mongourl)
    .then(() => {
        console.log("Mongodb - connection successfull")
    })
    .catch((err) => {
        if (err) throw err
    })

app.listen(port, host, (err) => {
    if (err) throw err
    console.log(`Server is Running:http://${host}:${port}`)
})