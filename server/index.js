const express = require('express');
const cors = require('cors');
const db = require('./config/db.js');
const fileRoutes = require('./routes/fileRoutes.js');
const path = require('path');
const dotenv = require('dotenv')
dotenv.config()

const app = express();

app.use(express.json());
app.use(cors());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(fileRoutes);

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
