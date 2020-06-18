var router = require('express').Router();
import { FindAllServiceProviders, CreateServiceProvider, FindAllServiceProvidersById, UpdateServiceProvider, DeleteServiceProvider } from './service_provider.services'

/**
 * @swagger
 *
 * definitions:
 *   ServiceProvider:
 *     type: object
 *     required:
 *       - id
 *       - name
 *       - primary_phone
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       primary_phone:
 *         type: string
 *       description:
 *         type: string
 *       created_at:
 *         type: date-time 
 *       updated_at:
 *         type: date-time 
 *   ServiceProviderArray:
 *     allOf:
 *       - $ref: '#/definitions/ServiceProvider'
 */


/**
 * @swagger
 *
 * /service_provider:
 *   get:
 *     description: Service Provider Get All Route
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *            type: array
 *            $ref: '#/definitions/ServiceProviderArray'
 */
router.get('/', async (req, res) => {
    try {
        let data = await FindAllServiceProviders(req.db)
        res.json(data);
    } catch (err) {
        res.status(500).json({error: "There was a server error"})
    }
});

/**
 * @swagger
 *
 * /service_provider/:id:
 *   get:
 *     description: Service Provider Get All Route
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: Id of the service provider requesting
 *     responses:
 *       200:
 *         description: login
 *         schema:
 *            $ref: '#/definitions/ServiceProvider'
 */
router.get('/:id', async (req, res) => {
    try {
        let data = await FindAllServiceProvidersById(req.db, req.params)
        res.json(data);
    } catch (err) {
        res.status(500).json({error: "There was a server error"})
    }
});

// Base Create Route
router.post('/', async (req, res) => {
    try {
        let data = await CreateServiceProvider(req.db, req.body)
        res.json(data);
    } catch (err) {
        res.status(500).json({error: "There was a server error"})
    }
});

// Base Update Route
router.put('/:id', async (req, res) => {
    try {
        let data = await UpdateServiceProvider(req.db, req.params, req.body)
        res.json(data);
    } catch (err) {
        res.status(500).json({error: "There was a server error"})
    }
});

// Base Delete Route
router.delete('/:id', async (req, res) => {
    try {
        await DeleteServiceProvider(req.db, req.params)
        res.status(204).json({success: true});
    } catch (err) {
        res.status(500).json({error: "There was a server error"})
    }
});

module.exports = router;