require('dotenv').config()
let production = {
  "username": process.env.DB_USERNAME,
  "password": process.env.DB_PASSWORD,
  "database": "np_services",
  "host": process.env.DB_HOST,
  "port": process.env.DB_PORT,
  "dialect": "postgres",
  "operatorsAliases": false
}

if(process.env.DATABASE_URL) {
  production = {
    url: process.env.DATABASE_URL,
  }
}
module.exports = {
  "development": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "np_services_dev",
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "test": {
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": "np_services_test",
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "dialect": "postgres",
    "operatorsAliases": false
  },
  "production": production
}