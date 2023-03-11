//create express router
const express = require('express')
const userRouter = express.Router()
//impliment the routes
/*
API URL:localhost:8080/user/ 
*/
userRouter.get("/", (req, resp) => {
    resp.send("Displaying  users")
});
/*
API URL:localhost:8080/user/all
*/
userRouter.get("/all", (req, resp) => {
    resp.send("Displaying all users")
});

module.exports = userRouter 