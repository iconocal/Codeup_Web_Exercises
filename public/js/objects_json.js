// todo:
// Create an array of objects that represent books.
// Each book should have a title and an author.
// The book author should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array
var books = [
	{
		'title': 'Catch 22',
		'author': {
			'firstName': 'Joseph',
			'lastName': 'Heller'
		}
	},
	{
		'title': 'Dune',
		'author': {
			'firstName': 'Frank',
			'lastName': 'Herbert'
		}
	},
	{
		'title': 'Slaughterhouse 5',
		'author': {
			'firstName': 'Kurt',
			'lastName': 'Vonnegut'
		}
	},
	{
		'title': 'Brideshead Revisited',
		'author': {
			'firstName': 'Evelyn',
			'lastName': 'Waugh'
		}
	},
	{
		'title': 'A Moveable Feast',
		'author': {
			'firstName': 'Ernest',
			'lastName': 'Hemmingway'
		}
	}
]


// log out the books array
console.log(books);

// // todo:
// // Loop through the array of books using .forEach and print out the specified information about each one.

books.forEach(function(element, index, array) {
		var book_number = index + 1;
	    console.log("Book #" + book_number);
	    console.log("Title: " + element.title);
	    console.log("Author: " + element.author.firstName);
	    console.log("---");
});


// // end loop here

