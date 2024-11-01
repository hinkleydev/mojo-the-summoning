const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const { db } = require('../src/db/config.js');
const { Card } = require('../src/models/Card.js');

// define in global scope
let card

// clear db and create new user before tests
beforeAll(async () => {
  await db.sync({ force: true })
  card = await Card.create({ name: 'magic missile', mojo: 3, stanima: 30, imgUrl: 'https://example.com/' })
})

// clear db after tests
afterAll(async () => await db.close())

describe('Card', () => {
  it('has an id', async () => {
    expect(card).toHaveProperty('id')
  });

  it("has the correct name", async function () {
    expect(card.name).toBe("magic missile");
  });

  it("has the correct mojo", async function () {
    expect(card.mojo).toBe(3);
  });

  it("has the right amount of stanima", async function () {
    expect(card.stanima).toBe(30);
  });

  it("has the correct imgUrl", async function () {
    expect(card.imgUrl).toBe("https://example.com/");
  })
})