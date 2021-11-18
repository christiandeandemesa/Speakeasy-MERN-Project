const express = require('express');
const cors = require('cors');
const cookies = require('cookie-parser');
const app = express();
const PORT = 8000;
const DB = 'speakeasy_DB';

app.use(cors({credentials: true, origins: 'http://localhost:3000'}));
app.use(cookies());
app.use(express.json(), express.urlencoded({extended: true}));

require('./config/mongoose.config')(DB);
require('./routes/tutors.routes')(app);

app.listen(PORT, () => console.log(`😄 The server is up on port ${PORT}!`));