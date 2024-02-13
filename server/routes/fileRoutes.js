
const express = require('express');
const router = express.Router();
const multer = require('../config/multer.js');
const fileController = require('../controllers/fileController.js');

router.post('/upload', multer.single('file'), fileController.uploadFile);
router.delete('/delete/:filename', fileController.deleteFile);
router.get('/download/:filename', fileController.downloadFile);

module.exports = router;
