var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var generateCsv = require('./client/app.js');

var fs = require('fs');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' })

var app = express()


// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: false }))


app.use(express.static(path.join(__dirname, '/client')));
 

// app.post('/', function (req, res) {
//   var data = generateCsv.generateCsv(JSON.parse(req.body.json_text))
//   console.log(data)

//   res.send(`<!DOCTYPE html>
// 	<html>
// 	  <head>
// 	    <meta charset="utf-8">
// 	    <link href="./style.css" rel="stylesheet">
// 	    <title>Mini App 2</title>
// 	  </head>
// 	  <body>
// 	  	<div id="border">
// 		    <form action="/" method="post">
// 	        <h2>JSON to CSV</h2>
// 	        <div>
// 	          <label for="msg">JSON Text: </label> 
// 	          <textarea id="msg" name="json_text"></textarea>
// 	        </div>
// 	        <div class="button">
// 	          <button type="submit" value="Submit">Submit</button>
// 	        </div>
// 		    </form>
// 		    <div id="csv">
// 	        <label for="name">CSV Text: </label> 
// 	        <textarea id="csv-text" type="text" name="csv"> ${data} </textarea>
// 	      </div>
// 	       <div id="input">
// 	        <label for="name">Choose File: </label> 
// 	        <input id="inputfile" type="file"/>
// 	      </div>
// 		  </div>
// 	  </body>
// 	</html>`
// 	);
// })

app.post('/', upload.single('json'), function (req, res) {

  console.log('HELLO')

  // fs.readFile(req.file.path, 'utf-8', (err, data) => {
  // 	if (err) {
  // 		res.status(500).send(err);
  // 	} else {
  // 		var csvData = generateCsv.generateCsv(JSON.parse(data))
  // 		res.status(201).send(csvData);
  // 	}
  // })
})

 
app.listen(3000, () => console.log(`Listening on port 3000!`));

