// todo:
// Create an array of months for printing dates without Moment.js.
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

// todo:
// Create the date corresponding to your birthday using the JavaScript Date object.
// todo:
// Log your birthday in the format: January 1, 2014 using the JavaScript Date object.
// See link below for methods needed:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Getter

var jsBirthday = new Date("April 27, 1969 11:17:00");
var month = months[jsBirthday.getMonth()];
var date = jsBirthday.getDate();
var year = jsBirthday.getFullYear();

var fullDate = month + " " + date + ", " + year;

console.log('Here is my birthday using vanilla js: ' + fullDate);




// create the date corresponding to your birthday using Moment.js.

var moDay = moment('April 27, 1969').format("MMMM Do YYYY");
console.log(moDay);





// var momentBirthday = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");

// // todo:
// // Log your birthday in the format: January 1, 2014 using Moment.js.
// console.log('Here is my birthday using Moment.js: ' + momentBirthday);
