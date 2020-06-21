'use strict'

const Sequelize = require('sequelize')

const { v4: uuidV4 } = require('uuid')

module.exports = (sequelize, DataTypes) => {
    const Service = sequelize.define(
        'Service',
        {
            name: {
                allowNull: false,
                type: Sequelize.UUID,
            },
            description: Sequelize.STRING,
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        },
        {
            hooks: {
                beforeValidate: (service, options) => {
                    service.id = uuidV4()
                },
            },
        },
    )

    Service.associate = function (models) {
        Service.belongsToMany(models.Category, {
            through: 'ServiceCategories',
            as: 'categories',
            foreignKey: 'serviceId',
            otherKey: 'categoryId',
        })
    }

    return Service
}
