// This file is having our schema ... our conatct schema

var mongoose = require('mongoose');

var ContactSchema = mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true
    },
    phone_number: {
        type: String,
        required: true
    }
});

// Export schema

const Contact = module.exports = mongoose.model('Contact', ContactSchema);