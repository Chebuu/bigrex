// https://github.com/Chebuu/r-script

const R = require('r-script');

var out = R("ex-sync.R")
  .data("hello world", 20)
  .callSync();
  
console.log(out);