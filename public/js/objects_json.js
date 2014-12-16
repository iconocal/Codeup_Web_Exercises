// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author.
// The book author should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
// var books = [
// 	{
// 		'title': 'Catch 22',
// 		'author': {
// 			'firstName': 'Joseph',
// 			'lastName': 'Heller'
// 		}
// 	},
// 	{
// 		'title': 'Dune',
// 		'author': {
// 			'firstName': 'Frank',
// 			'lastName': 'Herbert'
// 		}
// 	},
// 	{
// 		'title': 'Slaughterhouse 5',
// 		'author': {
// 			'firstName': 'Kurt',
// 			'lastName': 'Vonnegut'
// 		}
// 	},
// 	{
// 		'title': 'Brideshead Revisited',
// 		'author': {
// 			'firstName': 'Evelyn',
// 			'lastName': 'Waugh'
// 		}
// 	},
// 	{
// 		'title': 'A Moveable Feast',
// 		'author': {
// 			'firstName': 'Ernest',
// 			'lastName': 'Hemmingway'
// 		}
// 	}
// ]


// // log out the books array
// console.log(books);

// // // todo:
// // // Loop through the array of books using .forEach and print out the specified information about each one.

// books.forEach(function(element, index, array) {
// 		var book_number = index + 1;
// 	    console.log("Book #" + book_number);
// 	    console.log("Title: " + element.title);
// 	    console.log("Author: " + element.author.firstName + " " + element.author.lastName);
// 	    console.log("---");
// });

var movies = [
	{
		"title": "The Hobbit: The Battle of Five Armies",
		"year": 2014,
		"rating": "PG-13",
		"length": 144,
		"metascore": 65,
		"director": "Peter Jackson",
		"description": "Bilbo and Company are forced to engage in a war against an array of combatants and keep the terrifying Smaug from acquiring a kingdom of treasure and obliterating all of Middle-Earth.",
	},

	{
		"title": "Annie",
		"year": 2014,
		"rating": "PG",
		"length": 118,
		"metascore": 23,
		"director": "Will Guck",
		"description": "A foster kid, who lives with her mean foster mom, sees her life change when business tycoon and New York mayoral candidate Will Stacks makes a thinly-veiled campaign move and takes her in.",
	},
	{
		"title": "Inception",
		"year": 2010,
		"rating": "PG-13",
		"length": 148,
		"metascore": 74,
		"director": "Christopher Nolan",
		"description": "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",

	}
];

movies.forEach(function(element, index, array) {
		// alert("Test");
		console.log(element.title + "(" + element.year + ")" + " | " + element.rating);
		if (element.rating == "PG-13" || element.rating == "R") {
			console.warn("You must be 13 years of age or be accompanied by an adult.")
			};
		console.log("Length: " + element.length + " | " + "Metascore: " + element.metascore);
		console.log("Description :" + element.description);
		console.log("=======================================================================================");
		console.log(" ");
		if (element.title == "Inception") {
			alert("CAUTION: Attempting to progress more than 3 level in will dump you into Limbo - an expanse of infinite, raw, unconstructed dream space.");
			};
});
