const dbConfig = require("../config/db.config.js");
const { Sequelize, DataTypes } = require("@sequelize/core");

const sequelize = new Sequelize({
    database: dbConfig.DB,
    user: dbConfig.USER,
    password: dbConfig.PASSWORD,
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },
    define:{
        timestamps: false,
    }
});


const db = {
    sequelize: sequelize,
    Sequelize: Sequelize,
    warehouse: require("./warehouse.model.js")(sequelize, DataTypes),
    withdrawal: require("./withdrawalfood.model.js")(sequelize, DataTypes),
    order: require("./order.model.js")(sequelize, DataTypes),
};

module.exports = db;
