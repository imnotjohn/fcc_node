//
//
// Prints a list of files in a given directory.
// Filters based on file extension.
//
//

var fs = require('fs');
var fileDirectory = process.argv[2];
var fileExtention = '.' + process.argv[3];
var path = require('path'); 
var filteredList = [];

fs.readdir( fileDirectory, function (err, list) {
    if (err) {
        return console.log(err);
    } else {
        var fileList = list.toString();
        fileList = fileList.split(',');
        for (i = 0; i < fileList.length ; i++) {
            if (fileExtention == path.extname(fileList[i])) {
                filteredList.push(fileList[i]);
            }
        }
    }
    for (var each in filteredList) {
        console.log(filteredList[each]);
    };
});

// Solution
/*
 var fs = require('fs')
    var path = require('path')

    var folder = process.argv[2]
    var ext = '.' + process.argv[3]

    fs.readdir(folder, function (err, files) {
      if (err) return console.error(err)
      files.forEach(function (file) {
        if (path.extname(file) === ext) {
          console.log(file)
        }
      })
    })
*/