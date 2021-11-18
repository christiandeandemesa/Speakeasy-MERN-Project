const Tutor = require('../models/tutors.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {secret} = require('../config/jwt.config');

module.exports = {

    create: (req, res) => {
        Tutor.create(req.body)
            .then(newOne => res.json(newOne))
            .catch(err => res.status(400).json(err))
    },

    findAll: (req, res) => {
        Tutor.find()
            .then(all => res.json(all))
            .catch(err => res.status(400).json(err))
    },

    findOne: (req, res) => {
        Tutor.findById(req.params.id)
            .then(one => res.json(one))
            .catch(err => res.status(400).json(err))
    },

    update: (req, res) => {
        Tutor.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(editOne => res.json(editOne))
            .catch(err => res.status(400).json(err))
    },

    delete: (req, res) => {
        Tutor.findByIdAndDelete(req.params.id)
            .then(removeOne => res.json(removeOne))
            .catch(err => res.status(400).json(err))
    },

    register: (req, res) => {
        const tutor = new Tutor(req.body)
        tutor.save()
            .then(() => {
                res.cookie('tutortoken', jwt.sign({_id: tutor._id}, secret), {httpOnly: true})
                .json({msg: '🍪 Successfully registered a tutor in controllers', tutor: tutor});
            })
            .catch(err => res.json(err));
    },

    login: (req, res) => {
        Tutor.findOne({email: req.body.email})
            .then(tutor => {
                if(tutor === null) {
                    res.json({msg: '🛑🍪 User not found in controllers'});
                } else {
                    bcrypt.compare(req.body.password, tutor.password)
                        .then(passwordIsValid => {
                            if(passwordIsValid) {
                                res.cookie('tutortoken', jwt.sign({_id: tutor._id}, secret), {httpOnly: true})
                                .json({msg: '🍪 Successfully logged in a tutor in controllers'});
                            } else {
                                res.json({msg: '🛑🍪 Password not found in controllers'});
                            }
                        })
                        .catch(err => res.json({msg: '🛑🍪 Invalid login attempt in controllers'}));
                }
            })
            .catch(err => res.json(err));
    },

    logout: (req, res) => {
        res.clearCookie('tutortoken');
        res.sendStatus(200);
    }

}