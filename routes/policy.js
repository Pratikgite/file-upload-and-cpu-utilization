const express = require('express');
const router = express.Router();
const { SearchByName, Aggregate } = require('../controllers/policyController');

router.get('/search/:name', SearchByName);
router.get('/aggregate', Aggregate);

module.exports = router;