const Tutor = require('../controllers/tutors.controllers');
const {authenticate} = require('../config/jwt.config');

module.exports = app => {
    app.post('/api/tutors', Tutor.create);
    app.get('/api/tutors', Tutor.findAll); {/*Do I need authenticate*/}
    app.get('/api/tutors/:id', Tutor.findOne);
    app.put('/api/tutors/:id', Tutor.update);
    app.delete('/api/tutors/:id', Tutor.delete);
    app.post('/api/register', Tutor.register);
    app.post('/api/login', Tutor.login);
}