//https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4

var express = require('express');
var app = express();

var port = 8080;

var router = express.Router();

router.get('/', function(req, res) {
	res.json({ message: 'v1 of our API' });
});

app.use('/api', router);

app.listen(port);
console.log('...Aaaand we\'re up on port: ' + port);
