const { FindAllCategories, UpdateCategory, FindAllCategoriesById } = require("./category.service")

const fakeCategory = {
    save: jest.fn(),
    update: jest.fn(),
    destroy: jest.fn()
}

const mockDb = {
    Category: {
        findAll: jest.fn(() => fakeCategory),
        findOne: jest.fn(() => fakeCategory),
        update: jest.fn(res => Promise.resolve([1, [{ id: 1, name: 'test' }]]))
    }
}

describe('Testing Service Provider Services Unit Tests', () => {
    it('GET /categories should call db.findAll', async () => {
        await FindAllCategories(mockDb)   
        expect(mockDb.Category.findAll).toHaveBeenCalled()
    })

    it('GET /categories/id should call db.findOne', async () => {
        await FindAllCategoriesById(mockDb, {id: 1})
        expect(mockDb.Category.findOne).toHaveBeenCalledWith({id: 1})
    })

    it('Put /categories/id should call db.findOne', async () => {
        await UpdateCategory(mockDb, {id: 1}, { name: 'test' })
        expect(mockDb.Category.update).toHaveBeenCalledWith(
            { name: 'test' },
            {
                returning: true,
                where: {
                    id: 1
                }
            })
    })
})