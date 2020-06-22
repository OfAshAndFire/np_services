import '../../test/testSetup'
import { FindAllServices, FindServicesById, CreateService, UpdateService, DeleteService } from './service.services'

describe('Testing Service Services Unit Tests', () => {
    it('GET /services should call model findAll', async () => {
        sandbox.stub(models.Service, 'findAll')
        await FindAllServices()

        expect(models.Service.findAll.calledOnce).toBeTruthy()
    })

    it('GET /services/id should call model findOne', async () => {
        sandbox.stub(models.Service, 'findOne')
        await FindServicesById({ id: 1 })

        expect(models.Service.findOne.calledOnce).toBeTruthy()
    })

    it('POST /services should call model create', async () => {
        sandbox.stub(models.Service, 'create')
        await CreateService({ name: 'new service', description: 'new description' })

        expect(models.Service.create.calledOnce).toBeTruthy()
    })

    it('PUT /services/id should call model update', async () => {
        const updatedService = {
            name: 'updated service name',
            description: 'updated service description',
        }

        sandbox.stub(models.Service, 'update').resolves([1, [{ id: 1, ...updatedService }]])
        await UpdateService({ id: 1 }, updatedService)

        expect(
            models.Service.update.calledWith(updatedService, {
                returning: true,
                where: {
                    id: 1,
                },
            }),
        ).toBeTruthy()
    })
})
