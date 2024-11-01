const { db, DataTypes, Model } = require("../db/config.js");

class User extends Model{};

User.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    username: DataTypes.STRING
}, {
    sequelize: db
});

module.exports = { User }