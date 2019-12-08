const express = require('express');
const { Profile } = require('../models/Profile');
const { CustomError } = require('../models/CustomError');
const app = express.Router();

app.get('/user', (req, res) => res.send(users));
app.post('/userData', (req, res) => {
    const user_id = Profile.id;
});

module.exports = app;