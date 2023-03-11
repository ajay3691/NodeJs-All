const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv')
//import application routers
const userRouter = require('./routes/userRouter')
const productRouter = require('./routes/productRouter')

//create express app 
const app = express()

//read env variable 
dotenv.config({ path: "./config/config.env" })
let port = process.env.PORT
let hostname = process.env.HOSTNAME

//http logger
app.use(morgan('tiny'))
//verify root request
app.get("/", (req, res) => {
    res.send("App is working fine")
})

app.use("/user", userRouter);
//app.use("/user", require('./routes/userRouter'));

app.use("/product", productRouter);

//create express app , listen port 
app.listen(port, hostname, (err) => {
    if (err) throw err
    //console.log("Server Running port on:", hostname, ":", port)
    console.log(`Server is Running on: http://${hostname}:${port}`)
})