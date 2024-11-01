const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const { Deck } = require('../src/models/Deck.js');
const { db } = require('../src/db/config.js');

// Let's copy from the user file as it saves us some time

// define in global scope
let deck

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  deck = await Deck.create({ name: 'magic', xp: 20 })
})

// clear db after tests
afterAll(async () => await db.close())

describe('User', () => {
  it('has an id', async () => {
    expect(deck).toHaveProperty('id')
  });

  it("has the correct name", async function () {
    expect(deck.name).toBe("magic");
  })

  it("has the correct XP", async function () {
    expect(deck.xp).toBe(20);
  })
})
