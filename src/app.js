const express = require("express");
const app = express();
const swaggerUi = require('swagger-ui-express')
import { swaggerDocument } from './swaggerDoc'
import swaggerJsDoc from 'swagger-jsdoc'
import bodyParser from 'body-parser'
import models from '../models'
import { initDb } from './db'

if(process.env.DB_SYNC){
  initDb()
}
const swaggerDoc = swaggerJsDoc(swaggerDocument)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use((req, res, next) => {
  req.db = models
  next()
})

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.use('/service_provider', require('./service_provider/service_provider.routes'))

/**
 * @swagger
 *
 * /:
 *   get:
 *     description: Base Route
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *            type: string
 */
app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

module.exports = app;