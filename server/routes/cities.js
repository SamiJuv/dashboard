var express = require('express');
var router = express.Router();
const cities = require('all-the-cities');

router.get('/', function(req, res, next) {
  res.status(200).end();
});

router.get('/:cityName', function(req, res, next) {
  const selectedCity = req.params.cityName;

  if (!selectedCity) {
    return res.status(500).end();
  }

  const cityData = cities.find(city => city.name.match(selectedCity));

  return res.json(cityData);
});

module.exports = router;
