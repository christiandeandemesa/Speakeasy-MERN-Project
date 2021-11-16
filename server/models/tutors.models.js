const mongoose = require('mongoose');

const TutorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, '{PATH} must be present']
    },
    lastName: {
        type: String,
        required: [true, '{PATH} must be present']
    },
    image: {
        type: String
    },
    city: {
        type: String,
        required: [true, '{PATH} must be present']
    },
    state: {
        type: String,
        required: [true, '{PATH} must be present']
    },
    english: {
        type: Boolean,
        default: false
    },
    spanish: {
        type: Boolean,
        default: false
    },
    greek: {
        type: Boolean,
        default: false
    },
    resume: {
        type: String
    },
    online: {
        type: Boolean,
        default: true
    },
    rate: {
        type: Number,
        required: [true, '{PATH} must be present']
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String,
        required: [true, '{PATH} must be present']
    }
}, {timestamps: true});

const Tutor = mongoose.model('Tutor', TutorSchema);
module.exports = Tutor;