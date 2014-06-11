var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send('foobar');
});
app.listen(3000);
