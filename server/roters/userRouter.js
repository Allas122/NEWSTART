const {Router} = require("express")
const UserController=require("../controllers/UserController")
const router = Router()

router.post("/reg",UserController.Reg)
router.get("/i:id",UserController.GetUser)

module.exports = router