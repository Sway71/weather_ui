var express = require('express');
var router = express.Router();
var https = require('https');
var oboe = require('oboe');

/* GET home page. */

router.post('/current', function(req, res, next) {
	var address = req.body.address;
	var query = address.split(' ').join('+');
	var queryUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + query + "&key=" + process.env.GOOGLE_API_KEY;
	
	oboe(queryUrl).done((results) => {
		console.log("got google response");
		var location = results.results[0].geometry.location;
		var weatherQueryUrl = "https://api.forecast.io/forecast/" + process.env.FORECAST_API_KEY + "/" + location.lat + ',' + location.lng;
		oboe(weatherQueryUrl).done((weather) => {
			res.json(weather);
		});
	});
	
});

router.post('/forecast', function(req, res, next) {
	var result = "";
	var address = req.body.address;
	var query = address.split(' ').join('+');
	var queryUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + query + "&key="process.env.GOOGLE_API_KEY;
	oboe(queryUrl).done((results) => {
		var location = results.results[0].geometry.location;
		var weatherQueryUrl = "https://api.forecast.io/forecast/" + process.env.FORECAST_API_KEY + "/" + location.lat + ',' + location.lng;
		oboe(weatherQueryUrl).done((weather) => {
			res.json(weather);
		});
	});
});

module.exports = router;
