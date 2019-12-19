const express = require('express');
const userData = require('../models/Profile');
const app = express.Router();

app.get('/', (req, res) => res.send(userData));
app.post('/userData', (req, res) => {
    const user_id = Profile.id;
});

app.post('/login', (req, res, next) => {
    userData.Login(req.body.username, req.body.password)
    .then(x => res.send(x))
    .catch(next)
});

module.exports = app;