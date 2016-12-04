var express = require('express');
var app = express();

app.get('/:date', (req, res) => {
    var str = req.params.date;
    res.send(str);
})

app.listen(process.env.PORT || 5000);