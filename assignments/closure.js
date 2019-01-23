// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function numAdder(x) {
  return function(y) {
    return x + y;
  };
}

const add5 = numAdder(5); // sets x to 5
const add10 = numAdder(10); // sets x to 10

console.log(add5(2)); // sets y to 2
console.log(add10(2)); // sets y to 2

// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.

  let num = 0;
  return function() {
    return ++num;
  };
};

let increasedNum = counter();
console.log(increasedNum());
console.log(increasedNum());
console.log(increasedNum());
console.log(increasedNum());
console.log(increasedNum());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

/* STRETCH PROBLEM, Do not attempt until you have completed all previous tasks for today's project files */

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
