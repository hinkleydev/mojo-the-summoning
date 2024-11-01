const { User } = require('./User.js');
const { Deck } = require("./Deck.js");
const { Card } = require("./Card.js");
const { Attack } = require("./Attack.js");

// A user owns one deck
User.hasOne(Deck);
//Deck.belongsTo(User)

// A deck contains many cards which belong only to that deck
Deck.hasMany(Card);
//Card.belongsTo(Deck);

// An attack can come from a number of cards
Card.hasMany(Attack);
//Attack.hasMany(Card);

// and then export them all below
module.exports = { User, Deck, Card, Attack }
