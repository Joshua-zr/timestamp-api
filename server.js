var express = require('express');
var app = express();
var date;
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var obj = {
  unix: null,
  natural: null,
}
app.get('/:date', (req, res) => {
  var str = req.params.date;
  console.log(str);
  if (Number.isNaN(Number(str))) {
    date = new Date(str);
  } else {
    date = new Date(Number(str+'000'));
  }
  if ('Invalid Date' !== date.toString()) {
    obj.unix = Math.floor(date.getTime()/1000);
    obj.natural = month[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear();
  }
  res.send(JSON.stringify(obj));
})

app.listen(process.env.PORT || 5000);