const components = require("../components/userComponent")


class UserController{
    static async Reg(req,res){
        const a= await components.createUser(req.body)
        return res.send(a)
    }
    static async GetUser(req,res){
        const a = await components.FindById(req.params["id"])
        return res.send(a)
    }
}

module.exports = UserController