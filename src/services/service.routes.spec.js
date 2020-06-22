import request from 'supertest'
import app from '../app'
import * as Service from './service.services'
import '../../test/testSetup'

const fakeServices = [
    {
        id: 1,
        name: 'service 1',
        description: 'service 1 description',
    },
    {
        id: 2,
        name: 'service 2',
        description: 'service 2 description',
    },
]

describe('Services Router Unit Tests', () => {
    test('GET /services should return an array of services', done => {
        sandbox.stub(Service, 'FindAllServices').resolves(fakeServices)
        return request(app)
            .get('/services')
            .then(response => {
                expect(response.statusCode).toBe(200)
                expect(response.body).toStrictEqual(fakeServices)
                done()
            })
    })

    test('GET /services/:id should return a single service', done => {
        sandbox.stub(Service, 'FindServicesById').resolves(fakeServices[0])
        return request(app)
            .get('/services/1')
            .then(response => {
                expect(response.statusCode).toBe(200)
                expect(Service.FindServicesById.calledWith({ id: '1' })).toBeTruthy()
                expect(response.body).toEqual(fakeServices[0])
                done()
            })
    })

    test('POST /services should return created data with id and timestamps', done => {
        const fakeNewService = {
            name: 'new service',
            description: 'new service description',
        }

        const fakeResponse = {
            id: 2,
            createdAt: 'date',
            updatedAt: 'date',
            ...fakeNewService,
        }

        sandbox.stub(Service, 'CreateService').resolves(fakeResponse)

        request(app)
            .post('/services')
            .send(fakeNewService)
            .set('Accept', 'application/json')
            .then(response => {
                expect(response.statusCode).toBe(200)
                expect(Service.CreateService.calledWith(fakeNewService)).toBeTruthy()
                expect(response.body).toStrictEqual(fakeResponse)
                done()
            })
    })
})
