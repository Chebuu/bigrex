var express = require('express');
var router = express.Router();

const execr = require('../src/execr.js')

router.get('/example', function(req, res, next) {
  return null;
});

module.exports = router;
