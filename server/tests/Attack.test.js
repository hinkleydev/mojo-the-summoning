const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const { db } = require('../src/db/config.js');
const { Attack } = require('../src/models/index.js');

// define in global scope
let attack

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  attack = await Attack.create({ title: 'strike', mojoCost: 1, staminaCost: 4 })
})

// clear db after tests
afterAll(async () => await db.close())

describe('Attack', () => {
  it('has an id', async () => {
    expect(attack).toHaveProperty('id')
  });

  it("has the correct title", async function () {
    expect(attack.title).toBe("strike");
  });

  it("has the correct mojo cost", async function () {
    expect(attack.mojoCost).toBe(1);
  });

  it("has the right stamina cost", async function () {
    expect(attack.staminaCost).toBe(4);
  });
})
