const mongoose = require('mongoose');

const AgentSchema = new mongoose.Schema({ 
    name: String 
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('Agent', AgentSchema);