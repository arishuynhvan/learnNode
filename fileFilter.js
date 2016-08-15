var path = require('path');
var fs = require('fs');
var filteredFiles=[];


 var fileFilter=function (dir, ext,callback) {
  // fs.readFile(file, 'utf8', callback) can also be used
  var extension="."+ext;
  fs.readdir(dir,function(err,files){
  	if(err) return callback(err);
  //Use files.foreach(function(file){}) for neater solution
  for(var i=0; i<files.length;i++)
  	if (path.extname(files[i]) == extension)
        filteredFiles.push(files[i]);
  callback(null,filteredFiles);
  }
  )
  
};

 module.exports = fileFilter;