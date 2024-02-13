
const path = require('path');
const File = require('../models/file.js');

exports.uploadFile = async (req, res) => {
  try {
    const newFile = new File({
      filename: req.file.originalname,
      filepath: req.file.path,
    });
    await newFile.save();
    res.json({ message: 'File uploaded successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error uploading file' });
  }
};

exports.deleteFile = async (req, res) => {
  try {
    const filename = req.params.filename;
    const deletedFile = await File.findOneAndDelete({ filename });
    if (!deletedFile) {
      return res.status(404).json({ error: 'File not found' });
    }
    res.json({ message: 'File deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error deleting file' });
  }
};

exports.downloadFile = async (req, res) => {
  try {
    const filename = req.params.filename;
    const file = await File.findOne({ filename });
    if (!file) {
      return res.status(404).json({ error: 'File not found' });
    }
    const filePath = path.join(__dirname, '..', file.filepath);
    res.download(filePath, file.filename);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error downloading file' });
  }
};
