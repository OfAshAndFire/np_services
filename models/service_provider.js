'use strict';
const Sequelize = require('sequelize');

const {v4: uuidV4} = require('uuid');

module.exports = (sequelize, DataTypes) => {
  const service_provider = sequelize.define('service_provider', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.UUID
    },
    name: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    primary_phone: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }, {});
  service_provider.associate = function(models) {
    // associations can be defined here
  };

  service_provider.beforeCreate(provider => provider.id = uuidV4());
  return service_provider;
};