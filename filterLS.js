var fs = require('fs');
var path = require('path');
var dir = process.argv[2];
var extension = "."+process.argv[3];

fs.readdir(dir, function (err, files) {
  // fs.readFile(file, 'utf8', callback) can also be used
  if(err) return console.log(err);
  //Use files.foreach(function(file){}) for neater solution
  for(var i=0; i<files.length;i++)
  	if(path.extname(files[i]) == extension)
  		console.log(files[i]);
})
