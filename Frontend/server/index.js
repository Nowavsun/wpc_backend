const express = require("express")
const app = express()
const router = express.Router()
const bodyparser = require("body-parser")

app.use(bodyparser.urlencoded({
    extended:true
}))
app.use("/api", router)

app.listen(3300, ()=> {
    console.log("server port: 3300");
})