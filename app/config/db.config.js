module.exports = {
    DB: "progpa",
    USER: "postgres",
    PASSWORD: "admin",
    HOST: "localhost",
    DIALECT: "postgres",
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
