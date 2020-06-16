import request from "supertest";
import app from "./app";

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