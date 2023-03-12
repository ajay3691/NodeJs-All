import express from 'express'
import dotenv from 'dotenv'
let app = express()
dotenv.config({ path: './config/config.env' })
//loading environment variable using process variable
let port = process.env.PORT
let host = process.env.HOST
//create root api
app.get("/", (req, resp) => {
    resp.send("express app - is running successfully")
})
app.listen(port, host, (err) => {
    if (err) throw err
    console.log(`Server is Running:http://${host}:${port}`)
})