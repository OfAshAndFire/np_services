import { FindAllServiceProviders } from './service_provider.services'
const mockDb = {
    service_provider: {
        findAll: jest.fn()
    }
}

describe('Testing Service Provider Services', () => {
    it('GET /service_providers should call db.findAll', async () => {
        await FindAllServiceProviders(mockDb)
        expect(mockDb.service_provider.findAll).toHaveBeenCalled()
    })
})