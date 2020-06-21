import express from 'express'
const app = express()
const swaggerUi = require('swagger-ui-express')
import { swaggerDocument } from './swaggerDoc'
import swaggerJsDoc from 'swagger-jsdoc'
import bodyParser from 'body-parser'
import cors from 'cors'
import models from '../models'
import { initDb } from './db'

if (process.env.DB_SYNC) {
    initDb()
}
const swaggerDoc = swaggerJsDoc(swaggerDocument)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

if (process.env.NODE_ENV === 'development') {
    app.use(
        cors({
            origin: 'https://postwoman.io',
            optionsSuccessStatus: 200,
        }),
    )
}

app.use((req, res, next) => {
    req.db = models
    next()
})

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDoc))
app.use('/service_provider', require('./service_provider/service_provider.routes'))
app.use('/categories', require('./categories/category.routes'))
app.use('/services', require('./services/service.routes'))

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
app.get('/', (req, res) => {
    res.status(200).send('Hello World!')
})

module.exports = app
