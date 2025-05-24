const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    message: String, 
    createdAt: Date,
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Message', messageSchema);