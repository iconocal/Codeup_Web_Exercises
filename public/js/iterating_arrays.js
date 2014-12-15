// todo:
// 1. Create an array of 4 names using literal array notation, in a variable called 'names'.
// 2. Create a log statement that will log the number of elements in the names array.
// 3. Create log statements that will print each of the names array elements individually.


// var names = ['Calvin', 'Kady', 'Patrick', 'Mardi'];


// console.log(names.length);


// // console.log(names[0]);
// // console.log(names[1]);
// // console.log(names[2]);
// // console.log(names[3]);


// // ForEach Iteration through arrays

// // loop through the array and log the values
// // element is the value, index is the key
// shapes.forEach(function (element, index, array) {
//     console.log('The shape at index ' + index + ' is: ' + element);
// });



var names = ['Calvin', 'Kady', 'Patrick', 'Mardi'];

// for (var i = 0; i < names.length; i++) {
// 	console.log('The name at index ' + i + ' is: ' + names[i]);
// }

// forEach iteration through arrays
names.forEach(function (name, i, array) {
	console.log('The name at index ' + i + ' is ' + name);
});


// // Alternate Syntax for forEach loop iteration
// function loopArray(value, key, array) {
// 	console.log('The name at index ' + key + ' is ' + value);
// }

// names.forEach(loopArray);


