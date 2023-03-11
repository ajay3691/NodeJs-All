const fs = require('fs')
const path = require('path')
console.log(`${__dirname}`)
console.log(`${path.join(__dirname, "airtel", "order", "data.json")}`)

/* fs.readFile('airtel/order/data.json', 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
}) */

fs.readFile(path.join(__dirname, "airtel", "order", "data.json"), "utf-8", (err, data) => {
    if (err) throw err
    console.log(data)

    fs.writeFile(path.join(__dirname, "vi", "order", "new_data.json"), data, 'utf-8', (err) => {
        if (err) throw err
        console.log("Enjoy the data - written successfully")
    })
})

