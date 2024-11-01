// add your database connection here

const { Sequelize } = require("sequelize");

const db = new Sequelize( {
    dialect: "sqlite",
    storage: "./game.db"
})

module.exports = {db}