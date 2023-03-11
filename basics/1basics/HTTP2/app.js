const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((request, response) => {
    //response.end("<h1>Welcome - Node JS Server </h1>")
    /*  fs.readFile('index.html', 'utf-8', (err, data) => {
         response.writeHead(200, { 'Content-Type': 'text/html' })
         response.end(data)
     }) */
    fs.readFile(path.join(__dirname, "views", "index.html"), 'utf-8', (err, data) => {
        response.writeHead(200, { 'Content-Type': "text/html" })
        response.end(data)
    })
})
server.listen(8080, '127.0.0.1', () => {
    console.log(`Server is Running on........ http://127.0.0.1:8080`)
}) 
