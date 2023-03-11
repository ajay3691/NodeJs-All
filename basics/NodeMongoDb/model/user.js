import mongoose from 'mongoose'
let userSchema = mongoose.Schema({
    email: {
        type: String, require: true
    },
    mobile: {
        type: Number, require: true
    }
})

let User = mongoose.model("users", userSchema)

export default User

//SQL
/*
create table user(email varchar(32), mobile int)
*/