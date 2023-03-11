const http = require('http')
const dotenv = require('dotenv')
const fs = require('fs')
const path = require('path')

//load env content into proces.env
dotenv.config({ path: './config/config.env' })
let port = process.env.PORT
let host = process.env.HOSTNAME

let server = http.createServer((req, resp) => {
    let url = req.url
    console.log(url)

    if (url === '/') {
        fs.readFile(path.join(__dirname, "views", "index.html"), 'utf-8', (err, data) => {
            resp.writeHead(200, { 'Content-Type': "text/html" })
            resp.end(data)
        })
    }
   if (url === "/contact") {
        fs.readFile(path.join(__dirname, "views", "contact.html"), 'utf-8', (err, data) => {
            resp.writeHead(200, { 'Content-Type': "text/html" })
            resp.end(data)
        })
    }
    if (url === "/login") {
        fs.readFile(path.join(__dirname, "views", "login.html"), 'utf-8', (err, data) => {
            resp.writeHead(200, { 'Content-Type': "text/html" })
            resp.end(data)
        })
    }
    if (url === "/about") {
        fs.readFile(path.join(__dirname, "views", "about.html"), 'utf-8', (err, data) => {
            resp.writeHead(200, { 'Content-Type': "text/html" })
            resp.end(data)
        })
    }
    if (url === "/services") {
        fs.readFile(path.join(__dirname, "views", "services.html"), 'utf-8', (err, data) => {
            resp.writeHead(200, { 'Content-Type': "text/html" })
            resp.end(data)
        })
    }
    if (url === "/employees") {
        fs.readFile(path.join(__dirname, "views", "employees.html"), 'utf-8', (err, data) => {
            resp.writeHead(200, { 'Content-Type': "text/html" })
            resp.end(data)
        })
    }
    if (url === "/product") {
        fs.readFile(path.join(__dirname, "views", "product.html"), 'utf-8', (err, data) => {
            resp.writeHead(200, { 'Content-Type': "text/html" })
            resp.end(data)
        })
    }

})

server.listen(port, host, (err) => {
    if (err) throw err
    console.log(`Server Running sunday also: http://${host}:${port}`)

})
