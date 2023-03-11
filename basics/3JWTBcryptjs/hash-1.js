const bcrypt = require('bcryptjs')
let user = {
    "email": "abhishek@gmail.com",
    'cc': '1234123412341234',
    'password': "ILoveCCs"
}
let salt = bcrypt.genSaltSync(10)
console.log(user)

//let new_Email = bcrypt.hashSync(user.email, salt)
//let new_CC = bcrypt.hashSync(user.cc, salt)
let new_Password = bcrypt.hashSync(user.password, salt)
//console.log(new_Email)
//console.log(new_CC)
console.log(new_Password)  

user = { ...user, password: new_Password }
console.log(user) 