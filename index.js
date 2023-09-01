const express = require('express');
const bodyParser = require('body-parser');
const jsonwebtoken = require("jsonwebtoken");
require('./src/config/db');

const app = express();
const port = 3333;
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true })); // Place bodyParser middleware here
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const citiesRoutes = require('./src/routes/citiesRoutes');
const contentsRoutes = require('./src/routes/contentsRoutes');
const favoritesRoutes = require('./src/routes/favoritesRoutes');
const placesRoutes = require('./src/routes/placesRoutes');
const usersRoutes = require('./src/routes/usersRoutes');

// JWT verification middleware
app.use(function(req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function(err, decode) {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});

app.use('/auth', usersRoutes);
app.use('/cities', citiesRoutes);
app.use('/contents', contentsRoutes);
app.use('/favorites', favoritesRoutes);
app.use('/places', placesRoutes);

app.use('/', (req, res) => {
    res.send('Hello World!');
});

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' });
});

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
});
