/* eslint-disable no-console */
/* eslint-disable strict */

/**
 * ASSIGNMENT 1: Object initializers and methods
 * 
 * Create an object called loaf using an object initializer ({}) with two properties: flour, which should be set to 300 and water which should be set to 210.
 * 
 * Use console.log to print the flour and water properties.
 * 
 * Add an empty method to the loaf object called hydration.
 * 
 * Fill in the body of the method to return the hydration of the loaf (the water divided by the flour multiplied by 100).
 * 
 * Call the hydration method and use console.log to print the result.
 */

const loaf = { flour: 300, water: 210, hydration() { return (this.water / this.flour) * 100; } };

console.log(loaf.flour); //300
console.log(loaf.water);  //210
console.log(loaf.hydration());  //70


/**
 * ASSIGNMENT 2: Iterating over an object's properties
 * 
 * Create an object with five properties: foo, bar, fum, quux, and spam. Give each property a unique value of your choosing.
 * 
 * Loop over the object using for ... in
 * 
 * Use console.log to show each property name and its associated value.
 */

const obj = { foo: 'f00', bar: 'b@r', fum: 'FUM', quux: 'QuXX', spam: 'spamspamspamspam' };

for (const prop in obj) {
  console.log(`${prop}: ${obj[prop]}`);  //foo: f00  ...
}


/**
 * ASSIGNMENT 3: Arrays in objects
 * 
 * Create an object with a property called meals which is an array of strings: 'breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'.
 * 
 * Use console.log to show the name of a hobbit's fourth meal of the day.
 * 
 * Don't forget that humans and hobbits count from 1, but computers count from 0.
 */

const food = { meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper'] };

console.log(food.meals[3]);  //lunch


/**
 * ASSIGNMENT 4: Arrays of objects
 * 
 * Create 3-5 objects, each with a name and a jobTitle. Use people you know, or characters from fiction, or your own inventions.
 * 
 * Store these objects in an array.
 * 
 * Iterate over the array and use console.log to show each person's job title and name.
 */

const obj1 = { name: 'Dr. House', jobTitle: 'Medical Doctor' };
const obj2 = { name: 'Peter Grifin', jobTitle: 'Owner' };
const obj3 = { name: 'Rick', jobTitle: 'Nonconformist' };
const obj4 = { name: 'Homer Simpson', jobTitle: 'Nuclear Engineer' };
const obj5 = { name: 'Gordon Ramsay', jobTitle: 'Chef' };


const tvArray = [obj1, obj2, obj3, obj4, obj5];

function interateTvArray(array) {
  array.forEach(function (element) {
    console.log(`${element.name}: ${element.jobTitle}`);
  });
  //return;
}

interateTvArray(tvArray);

/**
 * ASSIGMENT 5: Properties that aren't there
 * 
 * Add a boss property to everyone in Assignment 4 but the owner
 * 
 * 
 */

const anArray = [obj1, obj2, obj3, obj4, obj5];

function aName(array) {
  array.forEach(function (element) {
    if (element.jobTitle !== 'Owner') {
      element.boss = '______';
    }
    else {
      element.boss = 'no one';
    }
    console.log(`${element.jobTitle} ${element.name} reports to ${element.boss}`);
  });
  return (array);
}

aName(anArray);

/**
 *  ASSIGNMENT 6 : Cracking The Code
 * 
 * 
 */
//Decoder
function decode(sentence) {
  let splitSentence = sentence.split(' ');
  let result = '';
  for (i = 0; i < splitSentence.length; i++) {
    let firstLetter = splitSentence[i].charAt(0);
    let index;
    const wordDecoder = {};
    function (words) {
      
    }
  return result;
}

console.log(decode('craft block argon meter bells brown croon droop'));
