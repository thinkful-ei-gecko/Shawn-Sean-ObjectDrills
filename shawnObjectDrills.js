/* eslint-disable quotes */
/* eslint-disable no-prototype-builtins */
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
const obj2 = { name: 'Peter Grifin', jobTitle: 'Brewer' };
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
 * ASSIGMENT 6: Cracking the code
 * 
 * Redo your Cracking the Code problem from String Drills but this time use an object as your cipher. This means, instead of doing some kind of condition check like if (char === 'a'), you should use an object's key-value pair structure as the code translator.
 * 
 * Additionally, create a decodeWords function that utilizes your decode function to accept a single string of words, and then return the fully decoded message as a string.
 * 
 */

function decode(sentence) {
  let splitSentence = sentence.split(' ');
  let solution = '';
  const cipher = { 'a': 1, 'b': 2, 'c': 3, 'd': 4 };
  splitSentence.forEach(function (element) {
    cipher[element.charAt(0)] !== undefined ? solution += element[cipher[element.charAt(0)]] : solution += ' ';
  });
  return solution;
}

console.log(decode('craft block argon meter bells brown croon droop')); //expected output: for loop


/**
 * ASSIGNMENT 7: Factory Functions with LOTR
 * 
 * Write a factory function called createCharacter (review in this assignment) that could appropriately build characters from LOTR that have the following attributes:
===============================================================================================
| Name                      | Nickname    | Race       | Origin         | Attack   | Defense  |
-----------------------------------------------------------------------------------------------
| Gandalf the White         | gandalf     | Wizard     | Middle Earth   | 10       | 6        |
-----------------------------------------------------------------------------------------------
| Bilbo Baggins             | bilbo       | Hobbit     | The Shire      | 2        | 1        |
-----------------------------------------------------------------------------------------------
| Frodo Baggins             | frodo       | Hobbit     | The Shire      | 3        | 2        |
-----------------------------------------------------------------------------------------------
| Aragorn son of Arathorn   | aragorn     | Man        | Dunnedain      | 6        | 8        |
-----------------------------------------------------------------------------------------------
| Legolas                   | legolas     | Elf        | Woodland Realm | 8        | 5        |
-----------------------------------------------------------------------------------------------
Each character should have the method describe which takes no parameters and prints out the string: "{name} is a {race} from {origin}."

Each character should also have a method called evaluateFight that takes in a character object and returns the following string: "Your opponent takes {x} damage and you receive {y} damage" where x and y are the differences between each characters attack and defense values. If defense exceeds attack, then take zero damage.

Using array literal syntax, create an array characters that calls your factory function for each character in the table above with the relevant parameters. Your characters array should now have 5 objects in it.

Add a new character to characters (make up any attributes not provided):

Arwen Undomiel is a Half-Elf of Rivendell
Using the .find() function, retrieve your character nicknamed aragorn from characters and then call his describe method.

Using the .filter() function, create a new array from characters that ONLY contains characters of the race Hobbit.

Using the .filter() function, create a new array from characters that ONLY contains characters with attack value above 5.

What if you wanted to equip a weapon for each character and change how they are described?
 */


const characters = [
  makeToon('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', '10', '6'),
  makeToon('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  makeToon('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  makeToon('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8),
  makeToon('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5),
  makeToon('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 8, 5)
];

const weapons = [
  { nickname: 'gandalf', weapon: 'Wizard Staff' },
  { nickname: 'bilbo', weapon: 'The One Ring' },
  { nickname: 'frodo', weapon: 'String and Barrow Blade' },
  { nickname: 'aragorn', weapon: 'Anduril' },
  { nickname: 'legolas', weapon: 'Bow and Arrow' },
  { nickname: 'arwen', weapon: 'Hadhafang' }
];

//FACTORY FUNCTION
function makeToon(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe() {
      console.log(`${name} is a ${race} from ${origin}`);
    },
    evaluateFight(opponent) {
      let dmgDealt;
      this.attack - opponent.defense > 0 ? dmgDealt = this.attack - opponent.defense : dmgDealt = 0;
      let dmgReceived;
      opponent.attack - this.defense > 0 ? dmgReceived = opponent.attack - this.defense : dmgReceived = 0;
      return `[${this.nickname}] deals [${dmgDealt}] points of damage to [${opponent.nickname}]. \n[${opponent.nickname}] deals [${dmgReceived}] points of damage to [${this.nickname}].`;
    },
  };
}


//find aragon
let aragon = characters.find(function (element) {
  return element.nickname === 'aragorn';
});

//filter all hobbits
let hobbits = characters.filter(x => x.race === 'Hobbit');

//filter all attack > 5
let over5 = characters.filter(x => x.attack > 5);

//merge chracters and weapons intor armed
function armed(characters, weapons) {
  let result = [];
  for (let i = 0; i < characters.length; i++) {
    for (let t = 0; t < weapons.length; t++) {
      if (characters[i].nickname === weapons[t].nickname) {
        result.push(Object.assign(characters[i], weapons[t]));
      }
    }
  }
  return result;
}

console.log(armed(characters, weapons));



//DO NOT DELETE
//console.log(aragon);
//console.log(hobbits);
//console.log(over5);


//DO NOT DELETE
//console.log(toby.evaluateFight(pat));
//console.log(pat.describe());