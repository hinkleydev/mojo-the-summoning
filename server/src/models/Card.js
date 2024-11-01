const { db, DataTypes, Model } = require("../db/config.js");

class Card extends Model{};

Card.init({
    id: {
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stanima: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING
}, {
    sequelize: db
});

module.exports = { Card }