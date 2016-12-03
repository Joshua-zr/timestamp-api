var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('timestamp-api');
})

app.listen(8080);