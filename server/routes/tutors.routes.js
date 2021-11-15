const Tutor = require('../controllers/tutors.controllers');

module.exports = app => {
    app.post('/api/tutors', Tutor.create);
    app.get('/api/tutors', Tutor.findAll);
    app.get('/api/tutors/:id', Tutor.findOne);
    app.put('/api/tutors/:id', Tutor.update);
    app.delete('/api/tutors/:id', Tutor.delete);
}