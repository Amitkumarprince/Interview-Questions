/////////////////////// 1 /////////////////////
// javascript :- javascript is a scripting or programming language that allows you to implement complex features on webpages.

// css :-"cascading style sheets"
// css :- css is a computer language for layingout and stracturing webpages (HTML or XML)

// html :- html is the standard markup language for creating web pages. HTML describe the structure of a web pages.
// HTML consists of a series of elements. HTML elements tell the browser how to display the content.

// what are the type of datatype in javaScript?
// The primitive data types in JavaScript include string, number, boolean, undefined, null, bigint and symbol. 
// The non-primitive data type includes the object. 

// variable = a variable is a container that stores a value.

// var = var has functional scope and can be redeclared and reassigned.

// let = let has block scope and can be reassigned but not redeclared.

// const = const has block scope and cannot be reassigned or redeclared.

// Q:-16 let, var & const in JS?
// let and const are block-scoped, while var is function-scoped. const defines constants

// What is the difference between null and undefined?
// null is an assigned value. It means nothing.
// undefined means a variable has been declared but not defined yet.

/*
// Q1. What is an object in JavaScript?
// An object is a collection of properties, where each property is a key-value pair.

// Q2. How do you create an object in JavaScript?
// There are different ways to create an object in JavaScript. The simplest way is to use the object literal.

// let person = { name: 'John', age: 30 };

// Q3. How do you access a property of an object in JavaScript?
// Dot property accessor: object.property.
// Square brackets property accessor: object['property']

// console.log(person.name); // Output: John

// console.log(person['age']); // Output: 30

// Q4. What is the difference between dot notation and square bracket notation in accessing object properties?
// The dot notation is used when you know the property name at the time of coding. The square bracket notation is used when you want to access the property dynamically.

// Q5. How do you add a new property to an object in JavaScript?
// You can add a new property to an object using the dot notation or the square bracket notation.

// person.city = 'New York'; // Using dot notation

// person['country'] = 'USA'; // Using square bracket notation
*/
/////////////////////// 2 /////////////////////
// If/else  :- If/else statements are conditional statements that are used to perform different actions based upon different conditions.

// ternary operator :-  A ternary operator can be used to replace an if..else statement in certain situations.
// let a = prompt("enter")
// console.log("you can", a<18? "not drink" : "drink")

// 1.Q  How does the ternary operator work in JavaScript?
// ternary operator takes three operands; a logical condition, a value to return if true, and a value to return if false


/////////////////////// 3 /////////////////////
// 1. What is a Loop in JavaScript?
// loop is a programming tool that is used to repeat a set of instructions. 
// such as for loop, while loop, and do...while loop

// for loop:- for loop is a programming tool that is 
//  Used when you know the number of times you want to execute the loop.

// while loop:- while loop is a programming tool that is 
// Used when you don't know the number of times you want to execute the loop.

// do...while loop:- do...while loop is a programming tool that is 
// Similar to while loop but guarantees at least one time execute the loop.

// for in loop :- iterates over the enumerable properties of an object, allowing you to access each property name (key) sequentially.
// for (let a in obj) {
//     console.log("marks of " + a + " are " + obj[a])
// }


// for of loop :- The for...of loop is used to go through each item in a list or collection one by one. (like an array or string)
// It's easier to use than other types of loops because you don't have to worry about keeping track of how many items you've gone through.

// for (let b of "Harry") {
//     console.log(b)
// }

// forEach :- The forEach method allows you to iterate over an array and per'form an operation on each element of the array.

// Q:-11 for, for...in, forEach in JS?
// for loops iterate over indi'ces, for...in loops iterates over object properties, forEach iterates over array elements.
//                     (अनेक) घातांक

/*
Functions :- Functions in JavaScript are reusable blocks of code that perform a specific task. They are essential for organizing code, promoting reusability logic.

1. Function Declarations:- Function declarations in JavaScript are a way to define reusable blocks of code that can be called to perform a specific task.
function greet(name) {
    console.log(`Hello, ${name}!`);
}

greet('Alice'); // Output: Hello, Alice!

2. Function Expressions:- a function expression is a way to create a function using a variable.
const greet = function () {
    console.log('Hello!');
};

3. Arrow Functions (ES6+):- Arrow functions are a more short way to write functions in JavaScript. They were introduced in ES6 (ECMAScript 2015) and have become very popular.
const greet = () => {
    console.log('Hello!');
};
greet(); // Output: Hello!
*/


// Template Literal :- Template Literal in ES6 provides new features to create a string that gives more control over dynamic strings.