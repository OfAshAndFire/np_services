import request from "supertest";
import app from "../app";
import { FindAllServiceProviders } from './service_provider.services'

jest.mock('./service_provider.services')

const fakeServiceProviders = [
    {
        id: 'aaabbb111',
        name: 'test'
    }
]

describe("Service Provider Router Tests", () => {
  test("GET /service_provider should return empty array", done => {
    FindAllServiceProviders.mockImplementation(() => fakeServiceProviders)
    request(app)
      .get("/service_provider")
      .then(response => {
        expect(response.statusCode).toBe(200);
        expect(response.body).toStrictEqual(fakeServiceProviders)
        done();
      });
  });
});