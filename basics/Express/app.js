 //import expres from 'express' //ES6
/* const express = require('express')
const morgan = require('morgan') */

import chalk from 'chalk'
import morgan from 'morgan'
import express from 'express'

const app = express()

app.use(morgan('combined'))


app.get("/", (req, resp) => {
    resp.send("Welcome Express Module")
});
app.get("/about", (req, resp) => {
    resp.send("About Us Page")
})
app.get("/services", (req, resp) => {
    resp.send("Services Page")
})
app.get("/contact", (req, resp) => {
    resp.send("Contact Us Page")
})
app.post("/add", (req, resp) => {
    resp.send("adding successfully!")
})


app.listen(9000, '127.0.0.1', (err) => {
    if (err) throw err
   // console.log(`Server is Running on: http://localhost:${9000}`)
    //console.log(`${chalk.blue(`Server Running on... ${9000}`)}`); 
    console.log(chalk.yellow(`Server is Running on: http://localhost:${9000}`))
})