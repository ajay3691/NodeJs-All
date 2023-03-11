import express from 'express'
let router = express.Router()
import User from '../model/user.js'
//impiment user apis 

router.get("/", (req, resp) => {
    resp.status(200).json({ "msg": "Hello,GM" })
});
router.get("/all", async (req, resp) => {
    try {
        let users = await User.find();
        resp.status(200).json(users)
    }
    catch (err) {
      resp.status(500).json({msg:err})
    }

})


export default router