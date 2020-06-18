import express from 'express'
import { FindAllServiceProviders, CreateServiceProvider, FindAllServiceProvidersById, UpdateServiceProvider, DeleteServiceProvider } from './service_provider.services'

const router = express.Router();

/**
 * @swagger
 *
 * definitions:
 *   ServiceProviderUpdate:
 *     type: object
 *     required:
 *       - id
 *       - name
 *       - primary_phone
 *     properties:
 *       name:
 *         type: string
 *       primary_phone:
 *         type: string
 *       description:
 *         type: string
 *   NewServiceProvider:
 *     type: object
 *     required:
 *       - name
 *       - primary_phone
 *     properties:
 *       name:
 *         type: string
 *       primary_phone:
 *         type: string
 *       description:
 *         type: string
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
 *         type: string
 *         format: date 
 *       updated_at:
 *         type: string
 *         format: date 
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
 *              $ref: '#/definitions/ServiceProviderArray'
 */
router.get('/', async (req, res) => {
    try {
        let data = await FindAllServiceProviders(req.db, req.query)
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
 *       500:
 *         description: Server Error
 *       200:
 *         description: Successful
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

/**
 * @swagger
 *
 * /service_provider:
 *   post:
 *     description: Service Provider create one route
 *     produces:
 *       - application/json
 *     parameters:
 *       - in:  body
 *         description: Service Provider Updated Data Object
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/NewServiceProvider'
 *     responses:
 *       500:
 *         description: Server Error
 *       200:
 *         description: Successful
 *         schema:
 *            $ref: '#/definitions/ServiceProvider'
 */
router.post('/', async (req, res) => {
    try {
        let data = await CreateServiceProvider(req.db, req.body)
        res.json(data);
    } catch (err) {
        res.status(500).json({error: "There was a server error"})
    }
});

/**
 * @swagger
 *
 * /service_provider/:id:
 *   put:
 *     description: Service Provider Update One Route
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: Id of the service provider requesting
 *       - in:  body
 *         description: Service Provider Updated Data Object
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/ServiceProviderUpdate'
 *     responses:
 *       500:
 *         description: Server Error
 *       200:
 *         description: Successful
 *         schema:
 *            $ref: '#/definitions/ServiceProvider'
 */
router.put('/:id', async (req, res) => {
    try {
        let data = await UpdateServiceProvider(req.db, req.params, req.body)
        res.json(data);
    } catch (err) {
        res.status(500).json({error: "There was a server error"})
    }
});

/**
 * @swagger
 *
 * /service_provider/:id:
 *   delete:
 *     description: Service Provider Delete One Route
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: Id of the service provider requesting to delete
 *     responses:
 *       500:
 *         description: Server Error
 *       204:
 *         description: Successful
 */
router.delete('/:id', async (req, res) => {
    try {
        await DeleteServiceProvider(req.db, req.params)
        res.status(204).json({success: true});
    } catch (err) {
        res.status(500).json({error: "There was a server error"})
    }
});

module.exports = router;
