var fs = require('fs');

function finishedReading(error,fileContent){
if(error) return console.log(error);
var str = fileContent.toString().split("\n");
console.log(str.length -1);
}

fs.readFile(process.argv[2],finishedReading);

/*Sample Solution:
var fs = require('fs')
var file = process.argv[2]

fs.readFile(file, function (err, contents) {
  // fs.readFile(file, 'utf8', callback) can also be used
  var lines = contents.toString().split('\n').length - 1
  console.log(lines)
})*/