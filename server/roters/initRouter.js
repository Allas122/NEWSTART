const {Router} = require("express")
const users = require("./userRouter")


var router = Router()

router.use("/user",users)

module.exports = router