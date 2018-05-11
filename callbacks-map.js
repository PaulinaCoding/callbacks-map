/*Implement your own version of the built-in array map function.

Yours will take in two arguments. The first will be an array to map and the second will be a callback function. The function will return a new array based on the results of the callback function.*/

var words = ["ground", "control", "to", "major", "tom"];

// The initial version before the change:
// map(words, function(word) {
  
let starman1 = words.map(function(word) {
  return word.length;
});

let starman2 = words.map(function(word) {
  return word.toUpperCase();
});

let starman3 = words.map(function(word) {
  return word.split('').reverse().join('');
});

console.log(starman1);
console.log(starman2);
console.log(starman3);



//[6, 7, 2, 5, 3]
//
//[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]
//
//[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]