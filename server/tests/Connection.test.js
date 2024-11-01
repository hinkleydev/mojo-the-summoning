const { describe, expect, it } = require("@jest/globals");
const { db } = require("../src/db/config.js");

describe("Basic sanity check", function() {
    test("database connection", async function() {
    let basicMath = await db.query("SELECT 1+1 as result;")
    expect(basicMath[0][0].result).toBe(2);
})})