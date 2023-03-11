const fs = require('fs')
//read file sysnchrously - abc.txt

//let content = fs.readFileSync('abc.txt')
let content = fs.readFileSync('abc.txt', 'utf-8')
console.log(content)

fs.writeFileSync('xyz.txt', content)
console.log("Written Successfully")