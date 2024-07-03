// 1. What is a Loop in JavaScript?
// loop is a programming tool that is used to repeat a set of instructions.

// for loop:- Used when you know the number of times you want to execute the loop.
// A "For" Loop is used to repeat a specific block of code a known number of times. 
// for (let i =0; i < 8; i++) {
//   console.log(i)
// }

// while loop:- Used when you don't know the number of iterations beforehand.
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// let i =0;
// while(i<n){
//   console.log(i)
//   i++;
// }

// do...while loop:- Similar to while loop but guarantees at least one execution of the block.
// let n = prompt("Enter the value of n")
// n = Number.parseInt(n)
// let i = 10;
// do{
//   console.log(i)
//   i++;
// }
//   while(i<n)

// for in loop :- The for...in loop in JavaScript iterates over the enumerable properties of an object, allowing you to access each property name (key) sequentially.
// let obj = {
//     harry: 98,
//     shub: 45,
//     shivikal: 56,
//     ritik: 57,
//     shiv: 23,
//   }
// for (let a in obj) {
//     console.log("marks of " + a + " are " + obj[a])
// }

// for of loop :- The for...of loop is used to go through each item in a list or collection (like an array or string) one by one. It's easier to use than other types of loops because you don't have to worry about keeping track of how many items you've gone through.
// for (let b of "Harry") {
//     console.log(b)
// }

// /////////////// 11 //////////////
//  Functions in JavaScript are reusable blocks of code that perform a specific task. They are essential for organizing code, promoting reusability, and encapsulating(एनकैप्सुलेटिंग) logic.

// 1. Function Declarations:- Function declarations in JavaScript are a way to define reusable blocks of code that can be called or invoked to perform a specific task.
// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }

// greet('Alice'); // Output: Hello, Alice!

// 2. Function Expressions:- In JavaScript, a function expression is a way to create a function using a variable.
//  Instead of declaring a function with a name using function functionName() { ... }, you assign it directly to a variable.
// const greet = function () {
//     console.log('Hello!');
// };

// 3. Arrow Functions (ES6+):- Arrow functions are a more concise(short) way to write functions in JavaScript. They were introduced in ES6 (ECMAScript 2015) and have become very popular.
// const greet = () => {
//     console.log('Hello!');
// };
// greet(); // Output: Hello!
