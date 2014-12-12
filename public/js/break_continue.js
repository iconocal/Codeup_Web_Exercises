// Break Continue is Javascript

// var random = Math.floor((Math.random()*50)+1);

for (var i = 1; i < 50; i++) {
	var random = Math.floor((Math.random()*100)+1);
	if (random % 2 !=0) {
		console.log("Random number to skip is: " + random);
		break;
	};	
}

for (var i = 1; i < 50; i++) {
	if (i %2 == 0) {

		continue;
	}

	if (i != random) {
		console.log(i);
	}

	else {
		console.log("Yikes! This is my random number!");
	} 
	
}