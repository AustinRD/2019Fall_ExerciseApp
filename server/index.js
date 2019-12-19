const express = require('express');
const profileController = require('./controllers/Profile');

const app = express();
const port = process.env.PORT || 3000;

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next();
});

app
    .use(express.json())
    .use('./profile', profileController)
    .use('./login', profileController)
    .get('/port', (req,res) => res.send("Using port: " + port));

app.listen(port, () => console.log(`Running on http://localhost:${port}`));