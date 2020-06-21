'use strict'
const Sequelize = require('sequelize')
const { v4: uuidV4 } = require('uuid')

module.exports = (sequelize, DataTypes) => {
    const ServiceCategories = sequelize.define(
        'ServiceCategories',
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
            },
            categoryId: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
            },
            serviceId: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
            },
        },
        {
            hooks: {
                beforeValidate: (serviceCategory, options) => {
                    serviceCategory.id = uuidV4()
                },
            },
        },
    )
    ServiceCategories.associate = function (models) {
        // associations can be defined here
    }
    return ServiceCategories
}
