//
//
// Uses a single synchronous filesystem operation to 
// read a file and print the number of newlines (\n).
// Similar to reading cat file | wc -l
//
//

var commLineArgument = process.argv;
var fileDir = commLineArgument[2];
var fileBuffer = '';

var fs = require('fs');

fileBuffer = fs.readFileSync(fileDir);
fileBuffer = fileBuffer.toString();
fileBuffer = fileBuffer.split('\n');

function countLineBreaks(txt) {
    console.log(fileBuffer.length - 1);
}

countLineBreaks(fileBuffer);

// Solution:
// var fs = require('fs')

// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)

// note you can avoid the .toString() by passing 'utf8' as the
// second argument to readFileSync, then you'll get a String!
// fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1