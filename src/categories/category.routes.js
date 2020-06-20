import express from 'express'
import { FindAllCategories, FindAllCategoriesById, CreateCategory, UpdateCategory, DeleteCategory } from './category.service';

const router = express.Router();

/**
 * @swagger
 *
 * definitions:
 *   CategoriesUpdate:
 *     type: object
 *     required:
 *       - id
 *       - name
 *       - description
 *     properties:
 *       name:
 *         type: string
 *       description:
 *         type: string
 *   NewCategories:
 *     type: object
 *     required:
 *       - name
 *       - description
 *     properties:
 *       name:
 *         type: string
 *       description:
 *         type: string
 *   Categories:
 *     type: object
 *     required:
 *       - id
 *       - name
 *       - description
 *     properties:
 *       id:
 *         type: string
 *       name:
 *         type: string
 *       description:
 *         type: string
 *       created_at:
 *         type: string
 *         format: date 
 *       updated_at:
 *         type: string
 *         format: date 
 *   CategoriesArray:
 *     allOf:
 *       - $ref: '#/definitions/Categories'
 */


/**
 * @swagger
 *
 * /categories:
 *   get:
 *     description: Category Get All Route
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
 *              $ref: '#/definitions/CategoriesArray'
 */
router.get('/', async (req, res) => {
    try {
        let data = await FindAllCategories(req.db)
        res.json(data);
    } catch (err) {
        res.status(500).json({error: "There was a server error"})
    }
});

/**
 * @swagger
 *
 * /categories/:id:
 *   get:
 *     description: Category Get All Route
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: Id of the Category requesting
 *     responses:
 *       500:
 *         description: Server Error
 *       200:
 *         description: Successful
 *         schema:
 *            $ref: '#/definitions/Categories'
 */
router.get('/:id', async (req, res) => {
    try {
        let data = await FindAllCategoriesById(req.db, req.params)
        res.json(data);
    } catch (err) {
        res.status(500).json({error: "There was a server error"})
    }
});

/**
 * @swagger
 *
 * /categories:
 *   post:
 *     description: Category create one route
 *     produces:
 *       - application/json
 *     parameters:
 *       - in:  body
 *         description: Category Updated Data Object
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/NewCategories'
 *     responses:
 *       500:
 *         description: Server Error
 *       200:
 *         description: Successful
 *         schema:
 *            $ref: '#/definitions/Categories'
 */
router.post('/', async (req, res) => {
    try {
        let data = await CreateCategory(req.db, req.body)
        res.json(data);
    } catch (err) {
        res.status(500).json({error: "There was a server error"})
    }
});

/**
 * @swagger
 *
 * /categories/:id:
 *   put:
 *     description: Category Update One Route
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: Id of the Category requesting
 *       - in:  body
 *         description: Category Updated Data Object
 *         required: true
 *         type: string
 *         schema:
 *           $ref: '#/definitions/CategoriesUpdate'
 *     responses:
 *       500:
 *         description: Server Error
 *       200:
 *         description: Successful
 *         schema:
 *            $ref: '#/definitions/Categories'
 */
router.put('/:id', async (req, res) => {
    try {
        let data = await UpdateCategory(req.db, req.params, req.body)
        res.json(data);
    } catch (err) {
        res.status(500).json({error: "There was a server error"})
    }
});

/**
 * @swagger
 *
 * /categories/:id:
 *   delete:
 *     description: Category Delete One Route
 *     produces:
 *       - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         type: string
 *         required: true
 *         description: Id of the Category requesting to delete
 *     responses:
 *       500:
 *         description: Server Error
 *       204:
 *         description: Successful
 */
router.delete('/:id', async (req, res) => {
    try {
        await DeleteCategory(req.db, req.params)
        res.status(204).json({success: true});
    } catch (err) {
        res.status(500).json({error: "There was a server error"})
    }
});

module.exports = router;