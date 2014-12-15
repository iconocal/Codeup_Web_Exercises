// Loop through classroom array
// When get to your name:
// Say "That is me!"
// When you get to your neighbor:
// Say "They help me!"


var classroom = [
'Nicole',
'Calvin',
'Felice',
'David',
'Kevin',
'Michael',
'Stephanie (Beyonce)',
'Paul',
'Chris',
'Jeff',
'Marissa',
'Travis'
];

for (var i = 0; i < classroom.length; i++) {
	if (classroom[i] == 'Calvin') {
		console.log(classroom[i] + "? Hey, that's me!!");	
	} else if (classroom[i] == 'Nicole') {
		console.log(classroom[i] + "? That's my neighbor. She helps me!");
	} else {
		console.log(classroom[i]);
	}
	
}




