const db = require("../db")
const {DataTypes} = require("sequelize")

const User = db.define("User",{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.BIGINT
    },
    imageRef:{
        type:DataTypes.STRING,
        allowNull:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type:DataTypes.STRING,
        allowNull: false
    }

})

const Buscets = db.define("Buscets",{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.BIGINT
    },
    price:{
        type:DataTypes.INTEGER

    }},
    {
        timestamps:false
    }
)

const BuscetProducts = db.define("BuscetProducts",
    {
        id:{
            primaryKey:true,
            autoIncrement:true,
            type:DataTypes.BIGINT
        },
        quantity:{
            type: DataTypes.INTEGER
        }
    }
)

const Orders = db.define("Orders",
    {
        id:{
            primaryKey:true,
            type: DataTypes.BIGINT,
            autoIncrement: true
        }
    }
)

const OrderDetails = db.define("OrderDatels",
    {
        id:{
            primaryKey: true,
            autoIncrement:true,
            type: DataTypes.BIGINT
        },
        price:{
            type:DataTypes.INTEGER
        }
    }
)

const Products = db.define("Products",
    {
        id:{
            type:DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        imageRef:{
            type: DataTypes.STRING
        },
        price:{
            type: DataTypes.INTEGER
        },
        Description: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }
)

const Keys = db.define("Keys",
    {
        id:{
            primaryKey: true,
            type:DataTypes.BIGINT,
            autoIncrement: true
        },
        shop:{
            type:DataTypes.STRING
        },
        Key:{
            type: DataTypes.INTEGER
        },
    }

)

Buscets.belongsTo(User)
Buscets.hasMany(BuscetProducts)
Orders.belongsTo(User)
Orders.hasMany(OrderDetails)
Products.hasMany(Keys)

module.exports = {User,Buscets,BuscetProducts,Orders,OrderDetails, Products, Keys}

