const Tutor = require('../models/tutors.models');

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
    }

}