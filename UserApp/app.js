import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import morgan from 'morgan'
import router from './controller/userRouter.js'
let app = express()
app.use(morgan('tiny'))

// configure express to receive the form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



//read/load configuration env variable - using dotenv package
dotenv.config({ path: './config/config.env' })
let port = process.env.PORT;
let host = process.env.HOST;
let mongodb_url = process.env.MongoDB_LOCAL_URL;


app.get("/", (req, resp) => {
    resp.send("Express- Root API........")
})

//router request
app.use("/user", router)

mongoose.connect(mongodb_url)
    .then(() => {
        console.log(`MongoDB - connection successful`)
    }).catch((err) => {
        console.log("Connetion Failed")
    })

app.listen(port, host, (err) => {
    if (err) throw err
    console.log(`Server Running on http://${host}:${port}`)
})