import request from "supertest";
import app from "../app";
import { FindAllServiceProviders, CreateServiceProvider, FindAllServiceProvidersById, UpdateServiceProvider, DeleteServiceProvider } from './service_provider.services'

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

  test("GET /service_provider/:id should return empty array", done => {
      FindAllServiceProvidersById.mockImplementation(() => fakeServiceProviders[0])
      request(app)
        .get("/service_provider/1")
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.body).toStrictEqual(fakeServiceProviders[0])
          done();
        });
    });

    test("Post /service_provider/:id should return empty array", done => {
        const mockCreateData = {
          id: '10',
          name: 'test'
        }
        CreateServiceProvider.mockImplementation((args) => mockCreateData)
        request(app)
          .post("/service_provider")
          .send(mockCreateData)
          .set('Accept', 'application/json')
          .then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.body).toStrictEqual(mockCreateData)
            done();
          });
    });
});