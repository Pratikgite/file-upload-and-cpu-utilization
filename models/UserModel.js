const mongoose = require('mongoose');

const userSchama = new mongoose.Schema({
    firstname: String, 
    dob: String, 
    address: String, 
    phone: String,
    state: String, 
    zip: String, 
    email: String,
    gender: String, 
    userType: String,
}, {
    timestamps: true,
    versionKey: false
});

module.exports = mongoose.model('users', userSchama);