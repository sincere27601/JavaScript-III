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
function sayName(name){
    console.log(this); //
    return name;
}
sayName("Michael");
// Principle 2

// code example for Implicit Binding
const myObj = {
    greeting: 'Hello',
    sayHello: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };

// code example for New Binding
myObj.sayHello('Ryan');
// Principle 3
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();
// Principle 4

// code example for Explicit Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const Newjerry = new CordialPerson('Newman');
  const Newnewman = new CordialPerson('Jerry');
  
  jerry.speak.call(newman);
  newman.speak.apply(jerry);

  jerry.speak();
  newman.speak();