//
// https://github.com/maxogden/art-of-node#callbacks
// Prints a list of files in a given directory, filtered
// by the extension of the files. 
//
// 
// first argument passed = a directory name
// second argument passed = a file extension to filter by
//

const path = require('path');
const fs = require('fs');
var directory = process.argv[2];
var ext = '.' + process.argv[3];
var dirBuffer = '';
var filtered = [];

function listDirectory(callback) {
	fs.readdir(directory, function doneReadingDir(err, dirContent) {
		dirBuffer = dirContent.toString();
		dirBuffer = dirBuffer.split(',');
		callback();
		});
	}

function logDirectory() {
	for (i = 0; i < dirBuffer.length; i++) {
		if (path.extname(i) == ext) {
			console.log(dirBuffer[i]);
		} else {
			console.log('hi');
		}
	}
	console.log(ext);
}

listDirectory(logDirectory);
