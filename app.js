const express = require('express');
const mongoose = require('mongoose');
const uploadRoutes = require('./routes/upload');
const policyRoutes = require('./routes/policy');
const messageRoutes = require('./routes/message');
require('./services/cpuMonitor');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/policyDB').then(() => console.log('MongoDB connected'));

app.use('/upload', uploadRoutes);
app.use('/policy', policyRoutes);
app.use('/message', messageRoutes);

app.listen(3000, () => console.log('Server running on port 3000'));