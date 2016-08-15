var dir = process.argv[2];
var ext = process.argv[3];

var fileFilter=require('./fileFilter.js');

function callback(err, list) {
  list.forEach(function(file) {
    console.log(file)
  })
}

fileFilter(dir, ext,callback);