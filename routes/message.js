const express = require('express');
const router = express.Router();
const { MessageSchedule } = require('../controllers/messageController');

router.post('/schedule', MessageSchedule);

module.exports = router;