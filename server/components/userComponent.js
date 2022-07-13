const {User,Buscets} = require("../models/model")
const argon2 = require("argon2")

class UserComponent{
    async createUser(data){
        const serch = await this.FindByEmail(data.email)
        if (serch == null){
            data.password = await argon2.hash(data.password)
            const {id} = await (await User.create(data)).get()
            await Buscets.create({UserId:id})
            return "Ok"
        }else{
            return "Email is exists"
        }
    }
    async FindById(id){
        var a = await User.findOne({
            where:{"id":id},
            attributes:["email","name","imageRef"]
        })
        return a
    }
    async FindByEmail(email){
        return await User.findOne({where:{
            "email":email
        }})
    }
    async Auth(body){
        
    }
}

module.exports = new UserComponent