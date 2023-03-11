import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import dotenv, { config } from 'dotenv'
//import user Collection
import User from './model/user.js'

//create expess app
const app = express()
//load application configuration env varaible
dotenv.config({ path: './config/config.env' })
//http logger
app.use(morgan('tiny'))

let port = process.env.PORT;
let hostname = process.env.HOSTNAME;
let dburl = process.env.MONGO_DB_LOCAL_URL

//impliment apis 
app.get("/", (req, resp) => {
    resp.send("Root Request working")
})
/* API URL: localhost:8080/users
   Method : GET
   Req Fields:None
*/
app.get("/users", async (req, resp) => {
    console.log("Test Case 123")
    let users = await User.find({})
    console.log(users)
    resp.status(200).json(users)
})
//connect mongodb local database
mongoose.connect(dburl)
    .then((db) => {
        console.log("Mongo DB Connection Successfull")
    }).catch((err) => {
        console.log(err)
    })
app.listen(port, hostname, (err) => {
    if (err) throw err
    console.log(`Server is Running on: http://${hostname}:${port}`)
})