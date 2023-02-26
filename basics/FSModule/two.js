//read file data using asynchronously
const fs = require('fs')


//fs.readFile('abc.txt', 'utf-8', () => { })
//              1          2        3
fs.readFile('abc.txt', 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
    fs.writeFile('abhi.txt', data, 'utf-8', (err) => {
        if (err) throw err
        console.log("Writen successfullt")
    })
})