var express = require('express');
const { publicDecrypt } = require('crypto');
const { fileURLToPath } = require('url');
const execr = require('../src/execr');
var router = express.Router();

const HELP_HTML = '../public/Help.html';

if (!fileURLToPath.Exists(HELP_HTML)) 
  execr('knitHelp')
    .then(function(d) { writeHelp(d, HELP_HTML) })
    .catch(console.error);

router.get('/help', function(req, res, next) {
  res.sendFile(HELP_HTML);
});

module.exports = router;
