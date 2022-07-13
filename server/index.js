const express = require("express")
const config = require("./config.json")
const Router = require("./roters/initRouter")
const sequelize = require("./db")

const app = express()


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use("/api",Router)

async function start(){
    try{
        await sequelize.authenticate()
        await sequelize.sync({force:true})
        app.listen(config.port,()=>{console.log(`Server is started on port ${config.port}`)})
    }
    catch(e){
        console.log(e)
    }
}
start()