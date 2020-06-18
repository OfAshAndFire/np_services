var router = require('express').Router();
import { FindAllServiceProviders } from './service_provider.services'

// Base Get Route
router.get('/', async (req, res) => {
    try {
        let data = await FindAllServiceProviders(req.db)
        res.json(data);
    } catch (err) {
        res.status(500).json({error: "There was a server error"})
    }
});

router.get('/list', (req, res) => {
    res.json({test: "yup"});
});

module.exports = router;