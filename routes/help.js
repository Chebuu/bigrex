var express = require('express');
const { publicDecrypt } = require('crypto');
const { fileURLToPath } = require('url');
const execr = require('../src/execr');
var router = express.Router();

const HELP_HTML = '../public/Help.html';

router.get('/help', function(req, res, next) {
  fs.access(HELP_HTML, async function(err) {
    if (err && err.code === 'ENOENT') {
      const kdata = await execr('knitHelp')
      writeHelp(kdata, HELP_HTML) 
    }
    res.sendFile(HELP_HTML);
  })
});

module.exports = router;
