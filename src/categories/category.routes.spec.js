import request from "supertest";
import app from "../app";
import { FindAllCategories, FindAllCategoriesById, CreateCategory } from "../categories/category.service";

jest.mock('./category.service')

const fakeCategories = [
    {
        id: 'aaabbb111',
        name: 'test',
        description: 'cool description'
    }
]

describe("Categories Router Unit Tests", () => {
  test("GET /categories should return fakeCategories array", done => {
      FindAllCategories.mockImplementation(() => fakeCategories)
      request(app)
        .get("/categories")
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(response.body).toStrictEqual(fakeCategories)
          done();
        });
    });

  test("GET /categories/:id call fakeServiceProvider with an id", done => {
      FindAllCategoriesById.mockImplementation(() => fakeCategories[0])
      request(app)
        .get("/categories/1")
        .then(response => {
          expect(response.statusCode).toBe(200);
          expect(FindAllCategoriesById.mock.calls[0][1]).toStrictEqual({ id: "1"})
          expect(response.body).toStrictEqual(fakeCategories[0])
          done();
        });
    });

    test("Post /categories/:id should return empty array", done => {
        const mockCreateData = {
          id: '10',
          name: 'test',
          description: 'description'
        }
        CreateCategory.mockImplementation((args) => mockCreateData)
        request(app)
          .post("/categories")
          .send(mockCreateData)
          .set('Accept', 'application/json')
          .then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.body).toStrictEqual(mockCreateData)
            expect(CreateCategory.mock.calls[0][1]).toStrictEqual(mockCreateData)
            done();
          });
    });
});