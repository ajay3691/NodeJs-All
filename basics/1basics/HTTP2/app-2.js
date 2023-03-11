const http = require('http')
const fs = require('fs')

const server = http.createServer((request, response) => {

    response.writeHead(200, { 'Content-Type': 'text/html' })
    //response.end("<h1>Welcome - Node JS Server </h1>")
    fs.readFile('index.html', 'utf-8', (err, data) => {
        response.end(data)
    })
})
server.listen(8080, '127.0.0.1', () => {
    console.log(`Server is Running on........ http://127.0.0.1:8080`)
}) 
