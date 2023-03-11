import express from 'express'
import mongoose from 'mongoose'
import morgan from 'morgan'
import dotenv, { config } from 'dotenv'

import userRouter from './routes/userRouter.js'

//create expess app
const app = express()
//load application configuration env varaible
dotenv.config({ path: './config/config.env' })
//http logger
app.use(morgan('tiny'))

let port = process.env.PORT;
let hostname = process.env.HOSTNAME;
let dburl = process.env.MONGO_DB_LOCAL_URL

app.use('/user', userRouter)

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