import { FindAllServiceProviders, FindAllServiceProvidersById, UpdateServiceProvider } from './service_provider.services'

const fakeProvider = {
    save: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn()
}

const mockDb = {
    service_provider: {
        findAll: jest.fn(() => fakeProvider),
        findOne: jest.fn(() => fakeProvider)
    }
}

describe('Testing Service Provider Services', () => {
    it('GET /service_providers should call db.findAll', async () => {
        await FindAllServiceProviders(mockDb)
        expect(mockDb.service_provider.findAll).toHaveBeenCalled()
    })

    it('GET /service_providers/id should call db.findOne', async () => {
        await FindAllServiceProvidersById(mockDb, {id: 1})
        expect(mockDb.service_provider.findOne).toHaveBeenCalled()
    })

    it('Put /service_providers/id should call db.findOne', async () => {
        await UpdateServiceProvider(mockDb, {id: 1}, { name: 'test' })
        expect(fakeProvider.save).toHaveBeenCalled()
    })
})