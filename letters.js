/* 
 * Danilo Zekovic
 * Chepter 2, Exersises problem #4
 * Create an object that stores individual letters in an array and 
 * has a function for displaying the letters as a single word.
 */

// create an object, constructor
function lettersObj() {
  this.dataStore = [];
  this.add = add;
  this.concat = concat;
}
// add letter to the array
function add(letter) {
  this.dataStore.push(letter);
}
// add letters toghether
function addThem (newString, letter) {
  return newString + letter;
}
// access array from the object and put letters from it into one word
// return the word created 
function concat () {
  return this.dataStore.reduce(addThem);
}

// create objec word
var word = new lettersObj();

// add letters to array
word.add("D");
word.add("a");
word.add("n");
word.add("i");
word.add("l");
word.add("o");

// print the word made out of letters from array in 'word'
var newWord = word.concat();
console.log(newWord);
