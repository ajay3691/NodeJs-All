const bcrypt = require('bcryptjs')
let user = {
    "email": "abhishek@gmail.com",
    'cc': '1234123412341234',
    'password': "Hello,GM"
}
console.log(user)

let salt = bcrypt.genSaltSync(10)

let new_Email = bcrypt.hashSync(user.email, salt)
let new_CC = bcrypt.hashSync(user.cc, salt)
let new_Password = bcrypt.hashSync(user.password, salt)
console.log(new_Email)
console.log(new_CC)
console.log(new_Password)

user = { ...user, email: new_Email, password: new_Password, cc: new_CC }
console.log(user)  

let flag = bcrypt.compareSync("Hello,GM", user.password)
flag ? console.log("Login Success") : console.log("Login Failure") 