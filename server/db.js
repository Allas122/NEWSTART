const {Sequelize} = require("sequelize")
const {db} = require("./config.json")

const sequelize = new Sequelize(`postgres://${db.user}:${db.password}@${db.host}:${db.port}/${db.name}`)

module.exports = sequelize
