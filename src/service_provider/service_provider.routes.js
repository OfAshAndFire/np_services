var router = require('express').Router();
import { FindAllServiceProviders, CreateServiceProvider, FindAllServiceProvidersById, UpdateServiceProvider, DeleteServiceProvider } from './service_provider.services'

// Base Get Route
router.get('/', async (req, res) => {
    try {
        let data = await FindAllServiceProviders(req.db)
        res.json(data);
    } catch (err) {
        res.status(500).json({error: "There was a server error"})
    }
});

// Base GetOne Route
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