var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/blip', function(req, res, next) {
	console.log("home pagee" + __dirname + "/index.html");
	res.sendfile(__dirname + "/index.html");
});

router.get('/api', function(req, res, next) {
	console.log("**************************************");
    res.setHeader('Cache-Control', 'no-cache');
    var data = {
        "author": "Pete Hunt",
        "text": "Hey there!"
    };
    res.json(data);
});

module.exports = router;
