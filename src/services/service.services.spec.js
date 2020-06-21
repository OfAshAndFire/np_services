import '../../test/testSetup'
import models from '../../models'
import { FindAllServices, FindServicesById } from './service.services'

const fakeServices = [
    {
        id: 1,
        name: 'service1',
        description: 'service1',
    },
    {
        id: 2,
        name: 'service2',
        description: 'service2',
    },
]

describe('Testing Service Services Unit Tests', () => {
    it('GET /services should call db.findAll', async () => {
        sandbox.stub(models.Service, 'findAll')
        await FindAllServices()
        expect(models.Service.findAll.calledOnce).toBeTruthy()
    })

    it('GET /services/id should call db.findOne', async () => {
        await FindServicesById(mockDb, { id: 1 })
        expect(mockDb.Service.findOne).toHaveBeenCalledWith({ id: 1 })
    })

    it('PUT /services/id should call db.findOne', async () => {
        await UpdateCategory(mockDb, { id: 1 }, { name: 'test' })
        expect(mockDb.Category.update).toHaveBeenCalledWith(
            { name: 'test' },
            {
                returning: true,
                where: {
                    id: 1,
                },
            },
        )
    })
})
