const express = require('express');
const app = express();
const port = 3000;

const db = require('../database/database.js');

const bodyParser = require('body-parser');
// const path = require('path');

app.use(bodyParser.json());


app.use(express.static('public'));		//?


app.post('/', (req, res) => {
	console.log(req.body)
	db.insertAll(req.body.name, req.body.email, req.body.password, req.body.address, req.body.phone, req.body.creditcard, req.body.expiry, req.body.cvv, req.body.billingzip, (error, results) => {
		if (error) {
	  	res.status(500).send(error);	
	  } else {	
			res.writeHead(201, {'Content-Type': 'application/json'})
			res.end(`{"success": true}`);
		}
	})
});


app.listen(port, () => console.log(`Listening on port ${port}!`));


