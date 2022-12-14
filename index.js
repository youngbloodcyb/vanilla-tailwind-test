const express = require('express');
const { home, test } = require('./controller');
const cors = require('cors');
require("dotenv").config();

const { PORT } = process.env

const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(cors());

try {
    app.get('/', home);
    app.get('/test', test);
} catch (err) {
    console.log(err);
}


app.listen(PORT, (err) => {
    if (err) console.log(err);
    console.log(`Server Running on port ${PORT}`);
});