// The port where our REST services will reside
var port = 9090;
// import our packages
var express = require('express');
var router = express.Router();
var app = express();
var bodyParser = require('body-parser');
// What port we are listening to
app.listen(port);
// Format our json responses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup our rest service
router.get('/data', function(req, res) {
	// Allow any ip address to hit our rest service
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  // Data to send back, change this to anything you like!
	var content = [
    {
        "name": "Benjamin Franklin",
        "gender": "Male",
        "company": "Franklin Power Company"
    },
	{
        "name": "George Washington",
        "gender": "Male",
        "company": "Washington Water Company"
    },
	{
        "name": "Ronald Donald",
        "gender": "Male",
        "company": "Donald Inc"
    },
	];
	// send back in the data field the content stored within the content variable
	res.json({ data: content });	
	// send console log that the response was sent
	console.log("Success: Response sent for /api/data");
});
// This is the beginning to our url
app.use('/api/', router);

// Log out what port were hosting the REST services on
console.log('Starting Rest Services on Port: ' + port);
console.log('You can hit the rest service by going to http://localhost:' + port + '/api/data');
console.log('You can stop the server by hitting ctrl + c at the same time');