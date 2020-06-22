import express from 'express'
import { FindAllServices, FindServicesById, UpdateService, CreateService, DeleteService } from './service.services'

const router = express.Router()

/**
 * @swagger
 *
 * /services:
 *   get:
 *     description: Service Get All Route
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: query
 *         name: includes
 *         schema:
 *          type: array
 *          items:
 *           type: string
 *          minItems: 0
 *     responses:
 *       500:
 *         description: Server Error
 *       200:
 *         description: login
 *         schema:
 *            type: array
 *            items:
 *              $ref: '#/definitions/ServicesArray'
 */
router.get('/', async (req, res) => {
    try {
        let data = await FindAllServices()
        res.json(data)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: 'There was a server error' })
    }
})

router.get('/:id', async (req, res) => {
    try {
        let data = await FindServicesById(req.params)
        res.json(data)
    } catch (err) {
        res.status(500).json({ error: 'There was a server error' })
    }
})

router.post('/', async (req, res) => {
    try {
        let data = await CreateService(req.body)
        res.json(data)
    } catch (err) {
        res.status(500).json({ error: 'There was a server error' })
    }
})

router.put('/:id', async (req, res) => {
    try {
        let data = await UpdateService(req.params, req.body)
        res.json(data)
    } catch (err) {
        res.status(500).json({ error: 'There was a server error' })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        await DeleteService(req.params, req.body)
        res.status(204).json({ success: true })
    } catch (err) {
        res.status(500).json({ error: 'There was a server error' })
    }
})

module.exports = router
