const express = require('express');

const users = require('./controllers/users');
const friends = require('./controllers/friends');
const exercise = require('./controllers/exercise');

const app = express();
const port = 3000;

app
    .use('/users', users)
    .get('/port', (req,res) => res.send("Using port: " + port));

app.listen(port, () => console.log(`Running on http://localhost:${port}`));