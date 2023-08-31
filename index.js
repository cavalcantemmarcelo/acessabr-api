const express = require('express');
const router = require('./routes');
require('./config/db');

const app = express();
const port = 3333;
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
});