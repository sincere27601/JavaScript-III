/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding is when all things left of the dot in dot notation is invoked.
* 2. Explicit Binding is when .call(), .bind(), and .apply() are invoked.
* 3. Global or Default Binding is when neither implicit or explicit binding is used, and the "this" becomes invoked.
* 4. New Binding is when we use new to create a keyword.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function myMagic(Necronomicon){
    console.log(this); //
    return myMagic;
}
myMagic("Necronomicon");
// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(Magi) {
      console.log(`${this.greeting} my name is ${ "The Magi King!"}`);
      console.log(this);
    }
  };

// code example for New Binding

// Principle 3
myObj.sayHello('Goodbye');
function becomes(Tree) {
    this.greeting = 'Shine I Will';
    this.greeter = 'demon';
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const Tree = new becomes ('Demon');
  const newDemon = new becomes ('Tree');
  
  Tree.speak();
  newDemon.speak();
// Principle 4

// code example for Explicit Binding
myObj.sayHello('Goodbye');
function becomes(Tree) {
    this.greeting = 'Shine I Will';
    this.greeter = 'demon';
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const newTree = new becomes ('Demon');
  const newestDemon = new becomes ('Tree');

Tree.speak.call(newDemon);
newDemon.speak.apply(newTree);
  
  Tree.speak();
  newDemon.speak();


