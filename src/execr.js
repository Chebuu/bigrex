// https://github.com/Chebuu/r-script

const R = require('r-script');

module.exports = function(script, data) {
    return new Promise(function(r, j) {
        R(`../lib/R/${script}.R`)
            .data(data)
            .call(function(e, d) {
                if (e) j(e); else r(d);
            });
    })
}