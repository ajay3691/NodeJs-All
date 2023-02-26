const http = require('http')
const { type } = require('os')
const server = http.createServer((req, resp) => {
    //write response logic
    resp.writeHead(200, { "Content-Type": "text/html" })
    resp.end("<h1>Welcome - Node JS Server </h1>")
})
server.listen(8080, (err) => {
    if (err) throw err
    console.log(`Server is Running on : http://localhost:${8080}`)
})

/* server.listen(8080, () => {
    console.log(`Server is Running on : http://localhost:8080`)
}) */