const request = require("supertest");
const app = require("./app");

describe("Server Integration Tests", () => {
  test("Placeholder test for initial route", done => {
    request(app)
      .get("/")
      .then(response => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });
});