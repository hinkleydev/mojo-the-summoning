const { db, DataTypes, Model } = require("../db/config.js");

class Deck extends Model{};

Deck.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER
}, {
    sequelize: db
});

module.exports = { Deck }