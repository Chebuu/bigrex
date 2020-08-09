var express = require('express');
var router = express.Router();

var execr = require('../src/execr.js')

router.get('/example', function(req, res, next) {
  return res.send(execr('../lib/runExample.R'));
});

module.exports = router;
