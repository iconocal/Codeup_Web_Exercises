
// declare a function that will be invoked immediately
// notice the parens surrounding the function. these are necessary
// also notice the double parens after the closing curly brace. these invoke the function.

(function () {
	var random = Math.floor((Math.random()*100)+1);
	function isOdd(number) {
		var message = (number % 2 == 0) ? number + " is even." : number + " is odd.";
		console.log(message);	
	}
	isOdd(random);
})();


