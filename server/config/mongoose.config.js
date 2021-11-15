const mongoose = require('mongoose');

module.exports = DB => {
    mongoose.connect(`mongodb://localhost/${DB}`)
        .then(() => console.log(`🧑‍🏫 Connected to ${DB} database!`))
        .catch(() => console.log(`🛑 🧑‍🏫 Could not connect to ${DB} databse?`))
}