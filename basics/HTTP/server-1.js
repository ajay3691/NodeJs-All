const http = require('http')
const server = http.createServer((req, resp) => {
    //write response logic
    resp.writeHead(200, { "Content-Type": "text/plain" })
    resp.end("Welcome - Node JS Server")
})

server.listen(8080, (err) => {
    if (err) throw err
    console.log(`Server is Runnig on: http://localhost:${8080}`)
})