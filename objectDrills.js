/* eslint-disable strict */

/**
 *  Object Drills 8/14/2019
 * 
 */

//Assignment 1
//Object creator
function createMyObject() {
  return {
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello() {
      return 'hello';
    }
  };
}

console.log(createMyObject());


//Assignment 2
//Object updater
function updateObject(obj) {
  const myObj = {
    foo: 'foo',
    bar: 'bar',
    bizz: 'bizz',
    bang: 'bang'
  }

  return { ...obj, ...myObj };

}

console.log(updateObject({ test1: '1', test2: '2', test3: '3' }));


//Assignment 3
//Self-reference
function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    fullName() {
      return (`${this.firstName} ${this.lastName}`);
    }
  }
  return person;
};

let newPerson = personMaker()
console.log(newPerson.fullName());


//Assignment 4
//Key deleting
const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  delete obj.foo;
  delete obj.bar;
  return obj;
}

console.log(keyDeleter(sampleObj));


//Assignment 5
//Properties that aren't there