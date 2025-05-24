const mongoose = require('mongoose');

const policyCarrierSchema = new mongoose.Schema({ 
    name: String 
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('PolicyCarrier', policyCarrierSchema);