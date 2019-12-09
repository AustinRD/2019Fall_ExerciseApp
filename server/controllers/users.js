const express = require('express');
const users = require('../models/users');

const app = express.Router();

app.get('/', (req, res) => {
    res.send({users})
});

app.post('/addUser', (req, res) => {
    users.addUser(req.param('username'), req.param('password'), req.param('firstName'), req.param('lastName'), req.param('age'), req.param('height'), req.param('weight'), req.param('gender'), res);
}),
app.post('/removeUser', (req, res) => {
    users.deleteUser(req.param('userID'), res);
}),
app.post('/getUser', (req, res) => {
    users.getUser(req.param('userID'), res);
}),
app.post('/allUsers', (req, res) => {
    users.getAllUsers(res);
});

module.exports = app;