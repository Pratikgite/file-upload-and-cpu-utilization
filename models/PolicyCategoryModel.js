const mongoose = require('mongoose');

const policyCategorySchema = new mongoose.Schema({ 
    name: String 
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('PolicyCategory', policyCategorySchema);