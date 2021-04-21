var express = require('express');
var router = express.Router();
var petData = require('../data/petData');

router.get('/', function(req, res, next) {
    res.send(petData);
});

module.exports = router;