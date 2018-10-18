var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'store'
});
 

var insertAll = function(name, email, password, address, phone, creditcard, expiry, cvv, billingzip, callback) {  
  var query = `INSERT INTO checkout (name, email, password, address, phone, creditcard, expiry, cvv, billingzip) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  var value = [name, email, password, address, phone, creditcard, expiry, cvv, billingzip];
	connection.query(query, value, function (error, results, fields) {
  	if (error) {
  		callback(error, null);
  	} else {
  		callback(null, results)
  	}
	});
}	
 

module.exports.insertAll = insertAll;


	