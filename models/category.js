'use strict'
const Sequelize = require('sequelize')

const { v4: uuidV4 } = require('uuid')

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define(
        'Category',
        {
            name: {
              allowNull: false,
              type: Sequelize.UUID
            },
            description: Sequelize.STRING,
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            }
        },
        {
            hooks: {
                beforeValidate: (category, options) => {
                    category.id = uuidV4()
                },
            },
        },
    )
    Category.associate = function (models) {
        // associations can be defined here
    }
    return Category
}
