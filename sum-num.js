//
// Accepts one or more numbers as command-line arguments and prints the sum. 
//
//

// Access command-line arguments via the global PROCESS object
// PROCESS object has an argv property which is an array containing
// the complete command-line --> process.argv
//


var commLineArgument = process.argv;
var nums = commLineArgument.slice(2);

function getSum(arr) {
	sum = 0;
	for (i = 0; i < arr.length; i++) {
		sum += parseInt(nums[i]);
	}
	console.log(sum);
}

getSum(nums);

// Solution:
// var result = 0

// for (var i = 2; i < process.argv.length; i++) {
// 	result += Number(process.argv[i])
// }

// console.log(result)