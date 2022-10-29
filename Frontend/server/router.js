const express = require("express")
const router = express.Router()



router.post("/register", (req, res) =>{
    const username = req.body.username
    const password = req.body.password
    const confirm = req.body.confirm

    res.send({
        username, password, confirm
    })
})

module.exports = router