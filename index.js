// 👇 COMPLETE YOUR WORK BELOW 👇
/* ❗❗ NOTE: PLEASE USE INDIVIDUAL KEYS FOR YOUR CONSTRUCTOR PARAMETERS, NOT OBJECTS. THE TESTS WILL NOT PASS WITH OBJECTS. ❗❗  */

/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + .eat() should recieve a string as a parameter and take some type of edible as an argument
        + When eating an edible, it should be pushed into the `stomach` array.
        + The `eat` method should have no effect if there are 10 items in the `stomach` array.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` array should be empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/

function Person(name, age) {
  this.name = name,
  this.age = age,
  this.stomach = []
}

Person.prototype.eat = function(edible) {
  this.stomach.push(edible);
};

Person.prototype.poop = function() {
  this.stomach = [];
};

Person.prototype.toString = function() {
  return `My name is ${this.name}, and I am ${this.age} years old.`
};

const neo = new Person ('Neo', 20);

console.log ('task 1:', neo);
console.log ('task 1:', neo.name);
console.log ('task 1:', neo.age);
console.log ('task 1:', neo.eat('pizza'));
console.log ('task 1:', neo.stomach);
console.log ('task 1:', neo.toString());

/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method
      + should take 'gallons' as an parameter which will take number of gallons as an argument
      + should add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model,
  this.milesPerGallon = milesPerGallon,
  this.tank = 0,
  this.odometer = 0
}

Car.prototype.fill = function(gallons) {
  return this.tank = this.tank + (gallons);
 
}

const corvette = new Car('Corvette', 18);

console.log ('task 2:,', corvette.fill(23));
console.log ('task 2:,', corvette.tank);


/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies also have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/

function Baby(name, age, favoriteToy) {
  Person.call(this, name, age);
  this.favoriteToy = favoriteToy
}

Baby.prototype = Object.create(Person.prototype);
Baby.prototype.play = function() {
  return `Playing with ${this.favoriteToy}.`
}

const jacjac = new Baby('JacJac', 1, 'lasers')

console.log ('task 3:', jacjac);
console.log ('task 3:', jacjac.name);
console.log ('task 3:', jacjac.play);
/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. WINDOW BINDING is the entire JavaScript running context.
  2. IMPLICIT BINDING is "assumed" or "implied" because it refers to the immediate location or context of the created variable or function, etc.
  3. EXPLICIT BINDING is NOT so easy to assume or imply and therefore uses terms like .call() and .bind() to point outside to what I want to run as context.
  4. NEW BINDING uses the word "new" to indicate the creation of an individual copy of a template. 
*/
console.log('task 4.1:', `WINDOW BINDING is the entire JavaScript running context.`);
console.log('task 4.2:', `IMPLICIT BINDING is "assumed" or "implied" because it refers to the immediate location or context of the created variable or function, etc.`);
console.log('task 4.3:', `EXPLICIT BINDING is NOT so easy to assume or imply and therefore uses terms like .call() and .bind() to point outside to what I want to run as context.`);
console.log('task 4.4:', `NEW BINDING uses the word "new" to indicate the creation of an individual copy of a template.`);

///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}
