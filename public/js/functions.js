// var myNameIs = 'Bob'; // todo: Fill in your name here.

// // todo:
// // Create a function called 'sayHello' that takes a parameter 'name'.
// // When called, the function should log a message that says hello from the passed in name.

// function sayHello(fname) {
// 	console.log("Hello from " + fname);
// }

// var myNameIs = "Calvin";

// sayHello(myNameIs);


// todo: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.

// do not worry about the details of this line
// just know that it genrates a random number between 1 and 100
var random = Math.floor((Math.random()*100)+1);

function isOdd(number) {
	var message = (number % 2 == 0) ? number + " is even." : number + " is odd.";
	console.log(message);
}

// isOdd(6);

isOdd(random);

// todo:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

// todo: Call the function 'isOdd' passing the variable 'random' as a parameter.