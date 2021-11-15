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
    }
}, {timestamps: true});

const Tutor = mongoose.model('Tutor', TutorSchema);
module.exports = Tutor;