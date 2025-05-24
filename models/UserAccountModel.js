const mongoose = require('mongoose');

const userAccountSchema = new mongoose.Schema({ 
    name: String 
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('userAccounts', userAccountSchema);
