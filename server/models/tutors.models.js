const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

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
        required: [true, '{PATH} must be present'],
        validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: 'Please enter a valid {PATH}'
        }
    },
    password: {
        type: String,
        required: [true, '{PATH} must be present'],
        minlength: [6, '{PATH} must be at least 6 characters long']
    }
}, { timestamps: true });

TutorSchema.virtual('confirmPassword')
    .get(() => this._confirmPassword)
    .set(value => this._confirmPassword = value);

TutorSchema.pre('validate', function (next) {
    if (this.password !== this.confirmPassword) {
        this.invalidate('confirmPassword', 'password must match confirm password');
    }
    next();
});

TutorSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 10)
        .then(hash => {
            this.password = hash;
            next();
        });
});

const Tutor = mongoose.model('Tutor', TutorSchema);
module.exports = Tutor;