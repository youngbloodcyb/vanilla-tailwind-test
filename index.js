const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('index.html');
});

app.listen(3030, (err) => {
    if (err) console.log(err);
    console.log("Server Running on port 3030");
});