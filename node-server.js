//
// Counts the number of Linebreaks in a file.
//

var fs = require('fs');
var file = process.argv[2];
var fileBuffer = '';

function countLineBreaks(callback) {
    fs.readFile(file, function doneReadingFile(err, fileContent) {
        fileBuffer = fileContent.toString();
        callback();
    });
}

function logLineBreaks() {
    fileBuffer = fileBuffer.split('\n');
    console.log(fileBuffer.length - 1);
}

countLineBreaks(logLineBreaks);