//create express router
const express = require('express')

const router = express.Router()

router.get("/", (req, resp) => {
    resp.send("Root -  Products")
})
router.get("/all", (req, resp) => {
    resp.send("all - Products")
})

module.exports = router