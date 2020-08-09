var express = require('express');
var router = express.Router();

var execr = require('../src/execr.js')

router.get('/example', function(req, res, next) {
    execr('../lib/runExample.R').then(res.send).catch(res.send)
});

module.exports = router;
