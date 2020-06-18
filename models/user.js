"use strict";
const Sequelize = require("sequelize");

const { v4: uuidV4 } = require("uuid");

module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define(
        "user",
        {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
            },
            first_name: {
                type: Sequelize.STRING,
            },
            last_name: {
                type: Sequelize.STRING,
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            primary_phone: {
                type: Sequelize.STRING,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            last_login: {
                type: Sequelize.DATE,
            },
        },
        {}
    );
    user.associate = function (models) {
        // associations can be defined here
    };

    user.beforeCreate((user) => (user.id = uuidV4()));
    return user;
};
