var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var generateCsv = require('./client/app.js');

var app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static(path.join(__dirname, '/client')));
 

app.post('/csv', function (req, res) {
  var data = generateCsv.generateCsv(JSON.parse(req.body.json_text))
  console.log(data)
  res.send(data);
})
 
app.listen(3000, () => console.log(`Listening on port 3000!`));

