const express = require('express');
const multer = require('multer');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });
const { Uploads } = require('../controllers/uploadsController');

router.post('/', upload.single('file'), Uploads);

module.exports = router;