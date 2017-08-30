//
//
// Asynchronous I/O - Uses a Single Async filesystem operation
// to read a file and print the number of newlines it contains to
// the console. 
//
// The full path read will be provided as the first command-line argument.
// https://github.com/maxogden/art-of-node#callbacks
//

var fs = require('fs');
var fileBuffer = undefined;
var contents = undefined; 
var fileDir = process.argv[2];

function countLines() {
    fs.readFile(fileDir, function doneReading(err, fileContents) {
        if (err) {
            console.log(err);
        } else {
            fileBuffer = fileContents;
            fileBuffer = fileBuffer.toString();
            lines = fileBuffer.split('\n');
            console.log(lines.length - 1);
        }
    });
}

countLines();


// Solution:

/*
    var fs = require('fs')
    var file = process.argv[2]

    fs.readFile(file, function (err, contents) {
      if (err) {
        return console.log(err)
      }
      // fs.readFile(file, 'utf8', callback) can also be used
      var lines = contents.toString().split('\n').length - 1
      console.log(lines)
    })
*/