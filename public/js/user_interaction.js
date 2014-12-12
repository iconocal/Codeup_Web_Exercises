// alert("Message goes here.");


// var response = prompt('What is your favorite color?');

// // next, we will send a message back to the user that uses their response
// alert('Awesome, ' + response + ' is my favorite color too!');

// var confirmed = confirm('Are you sure you want to do this?');


// if(confirmed) {
// 	alert("Yay!!!");
// } else {
// 	alert("Boo!!!");
// }

// todo: Ask the user for their name.
//       Keep asking if an empty input is provided.

var noName = true;

while (noName) {
	var confirmed = prompt("What is your name?");
	if (confirmed == null || confirmed == "") {
		alert("Try again loser!");

		} else {
			alert("Your name is: " + confirmed);
			noName = false;
		}
} 

// todo: Show an alert message that welcomes the user based on their input.

// todo: Ask the user if they like pizza.
//       Based on their answer tell show a creative alert message.

// var pizzaFan = confirm('Do you like pizza?');

// if (pizzaFan) {
// 	alert("Yay! Let's go grab a slice!");
// } else {
// 	alert("I don't know who you are anymore?!");
// }