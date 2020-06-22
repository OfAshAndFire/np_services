import models from '../../models'

export async function FindAllServices() {
    return models.Service.findAll({
        include: [
            {
                model: models.Category,
                as: 'categories',
                attributes: ['id', 'name', 'description'],
                through: {
                    attributes: [],
                },
            },
        ],
    })
}

export async function FindServicesById({ id }) {
    return models.Service.findOne({ where: { id } })
}

export async function CreateService(data) {
    return models.Service.create(data)
}

export async function UpdateService({ id }, data) {
    return models.Service.update({ ...data }, { returning: true, where: { id } }).then(
        ([rowsUpdate, [updatedService]]) => updatedService,
    )
}

export async function DeleteService({ id }) {
    let service = await models.Service.findOne({ id })

    return service.destroy()
}
