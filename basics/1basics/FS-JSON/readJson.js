const fs = require('fs')

//read json file asynchronous

fs.readFile('emp.json', 'utf-8', (err, data) => {
    if (err) throw err
    console.log(JSON.parse(data))

    fs.writeFile('user.json', data, 'utf-8', (err) => {
        if (err) throw err
        console.log("Written successfully")
    })
    /* console.log(JSON.parse(data)) */
})