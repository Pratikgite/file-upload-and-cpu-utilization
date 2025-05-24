const mongoose = require('mongoose');

const policyInfoSchema = new mongoose.Schema({
    number: String, 
    startDate: String, 
    endDate: String,
    categoryId: mongoose.Schema.Types.ObjectId,
    companyId: mongoose.Schema.Types.ObjectId,
    userId: mongoose.Schema.Types.ObjectId,
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('PolicyInfo', policyInfoSchema);