const { db, DataTypes, Model } = require("../db/config.js");

class Attack extends Model{};

Attack.init({
    //id: {
    //    primaryKey: true,
    //    type: DataTypes.INTEGER
    //},
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER
}, {
    sequelize: db
});

module.exports = { Attack }