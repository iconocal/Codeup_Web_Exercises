
// ignore these lines for now
// just know that the variable 'color' will end up with a random value from the colors array
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'blue'; // todo, change this to your favorite color from the list



// todo: Create a block of if/else statements to check for every color except indigo and violet.
// todo: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.

if (color == 'red') {
	console.log("Red is the color of Godless Communists.");
} else if (color == 'orange') {
	console.log("Orange is the color of Godless Netherlanders.");
} else if (color == 'yellow') {
	console.log("Yellow is the color of Godless cowards.");
} else if (color == 'green') {
	console.log("Green is the color of Kermit the Frog - a well-known Communist.");
} else if (color == 'blue') {
	console.log("Blue is the color of fresh water. No known religious affiliation.");
} else {
	console.log("Indigo and Violet are not colors. They are a Communist plot to sow dissension between men and women shopping for curtains.");
}


(color == favorite) ? console.log(color + " is my favorite color!") : console.log(color + " is not a particular favorite of mine.");

// if (color == favorite) {
// 	console.log(color + " is my favorite color!");
// }

// todo: Have a final else that will catch indigo and violet.
// todo: In the else, log: I do not know anything by that color.

// todo: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.

