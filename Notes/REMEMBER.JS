/////////////////////// 1 /////////////////////
// javascript :- javascript is a scripting or programming language that allows you to implement complex features on webpages.
// css is the acronym of "cascading style sheets"
// css :- css is a computer language for layingout and stracturing web pages (HTML or XML)

// html :- html is the standard markup language for creating web pages. HTML describe the structure of a web pages.
// HTML consists of a series of elements. HTML elements tell the browser how to display the content


// variable = a variable is a container that stores a value.

// var = var  has functional scope and can be redeclared and reassigned.

// let = let has block scope and can be reassigned but not redeclared.

// const = const has block scope and cannot be reassigned or redeclared.

// Q1. What is an object in JavaScript?
// Answer: An object is a collection of properties, where each property is a key-value pair.

// Q2. How do you create an object in JavaScript?
// Answer: There are different ways to create an object in JavaScript. The simplest way is to use the object literal.

// let person = {name: 'John', age: 30};

// Q3. How do you access a property of an object in JavaScript?
// Dot property accessor: object. property. 
// Square brackets property accessor: object['property']

// console.log(person.name); // Output: John

// console.log(person['age']); // Output: 30

// Q4. What is the difference between dot notation and square bracket notation in accessing object properties?
// Answer: The dot notation is used when you know the property name at the time of coding. The square bracket notation is used when you want to access the property dynamically.

// Q5. How do you add a new property to an object in JavaScript?
// Answer: You can add a new property to an object using the dot notation or the square bracket notation.

// person.city = 'New York'; // Using dot notation 

// person['country'] = 'USA'; // Using square bracket notation

/////////////////////// 2 /////////////////////
// If/else statements are conditional statements that are used to perform different actions based upon different conditions.

// let a = prompt("enter")
// console.log("you can", a<18? "not drink" : "drink")
// A ternary operator can be used to replace an if..else statement in certain situations.

// 1.Q  How does the ternary operator work in JavaScript?
// takes three operands; a logical condition, a value to return if true, and a value to return if false


/////////////////////// 3 /////////////////////
// 1. What is a Loop in JavaScript?
// loop is a programming tool that is used to repeat a set of instructions.

// for loop:- Used when you know the number of times you want to execute the loop.

// while loop:- Used when you don't know the number of times you want to execute the loop.

// do...while loop:- Similar to while loop but guarantees at least one time execute the loop.

// iterates over the enumerable properties of an object(किसी वस्तु के असंख्य गुणों को दोहराता है)
// for in loop :- iterates over the enumerable properties of an object, allowing you to access each property name (key) sequentially.
// for (let a in obj) {
//     console.log("marks of " + a + " are " + obj[a])
// }


// for of loop :- The for...of loop is used to go through each item in a list or collection one by one.
// (like an array or string) It's easier to use than other types of loops because you don't have to worry about keeping track of how many items you've gone through.
// अन्य प्रकार के लूपों की तुलना में इसका उपयोग करना आसान है क्योंकि आपको यह ट्रैक करने की चिंता करने की ज़रूरत नहीं है कि आप कितनी वस्तुओं से गुज़रे हैं।
// for (let b of "Harry") {
//     console.log(b)
// }





// Functions in JavaScript are reusable blocks of code that perform a specific task. They are essential for organizing code, promoting reusability logic.

// 1. Function Declarations:- Function declarations in JavaScript are a way to define reusable blocks of code that can be called to perform a specific task.
// function greet(name) {
//     console.log(`Hello, ${name}!`);
// }

// greet('Alice'); // Output: Hello, Alice!

// 2. Function Expressions:- a function expression is a way to create a function using a variable.
// const greet = function () {
//     console.log('Hello!');
// };

// 3. Arrow Functions (ES6+):- Arrow functions are a more short way to write functions in JavaScript. They were introduced in ES6 (ECMAScript 2015) and have become very popular.
// const greet = () => {
//     console.log('Hello!');
// };
// greet(); // Output: Hello!




// join :- the join() method lets you take an array and combine its elements into one string.

// pop :- removes the last element from an array and returns that value to the caller.

// push :- adds the specified elements to the end of an array and returns the new length of the array.

// shift :- removes the first item of an array and returns that value to the caller.
// The shift() method changes the original array.


// unshift :- adds new elements to the beginning of an array  and returns the new length of the array.
// The unshift() method overwrites the original array.


///////// 18 //////
// concat :- allows you to merge multiple arrays at once. 

// Sort :-compares the elements of the array by converting them into strings and then comparing their Unicode code points.

// reverse :- reverses the order of the elements in an array. 

// splice :- that is used to change the contents of an array by removing or replacing existing elements and adding new elements.
//  It modifies the original array and returns an array of the removed elements.

//  slice :- returns selected elements in an array, as a new array.



// //////// 19 // /////
// forEach :- that allows you to iterate over an array and perform an operation on each element of the array.

////////////20/////////////
// map method :- It creates a new array by calling a function on every element of the original array and storing the results in a new array.
// map() returns the new array, and the original array is unchanged.

// Filter method :- The filter() method creates a new array filled with elements that pass a test provided by a function.
// The filter() method does not execute the function for empty elements.
// The filter() method does not change the original array.

// reduce method :- used to reduce an array to a single value by applying a function to each element.

/////////////////////// 8 /////////////////////
// setTimeout :- the setTimeout() function is used to introduce a delay or to execute a particular function after a specified amount of time has passed.

// setInterval :- The setInterval() method calls a function at specified intervals (in milliseconds). It continues calling the function until clearInterval() is called or the window is closed. 
// This method is useful for tasks that need periodic execution, like updating animations or refreshing data.




// onclick :- The onclick function is an event handler in JavaScript that is used to respond to a specific event a mouse click on a particular HTML element. This event can be triggered when a user clicks on a button, a link, an image, or virtually any other clickable element on a web page.
// let a = document.getElementsByClassName("container")[0]
// a.onclick = () => {
//   let b = document.getElementsByClassName("container")[0]
//   b.innerHTML = "Hello World!"
// }

// The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target. 
// This method allows multiple event handlers on an element, enabling dynamic and flexible interaction management within web applications.

// btn.addEventListener('click', function(e){ // ye har bar click hone pe chalega
//   console.log("Hello")
// })

// let x = function(event) {
//   // console.log(event) // button full detail
//   // console.log(event.target) // button show ho jayga
//     // console.log(event.type) //click
//     // console.log(event.clientX) // location x
//     //   console.log(event.clientY) // location y
//       // console.log(event.type, event.clientX, event.clientY) // click location x y
//     // alert("Hello World1!")
//   }

//   btn.addEventListener('click', x)

////////////////// 9 ////////////////////
// Synscronaus programing :- As the name suggests synchronous means to be in a sequence, i.e. every statement of the code gets executed one by one. So, basically a statement has to wait for the earlier statement to get executed

// asynchronous programing :- One approach to asynchronous programming is to make functions that need to wait for something take an extra argument, a callback function. The asynchronous function starts a process, sets things up so that the callback function is called when the process finishes, and then returns.

//callback :- A JavaScript callback is a function which is to be executed after another function has finished execution.
// Any function that is passed as an argument to another function so that it can be executed in that other function is called as a callback function.

// loadScript :- dynamically load as many JavaScript files as necessary on a page, but make sure you consider the order in which files must be loaded.

// Promises :- JavaScript Promises used to simplify managing multiple asynchronous operations, preventing callback hell and unmanageable code.

// then :- The then() method provides two callbacks: One funtion to run when a promise is fulfilled and one funtion to run when a promise is rejected.

// catch :- The catch() method of Promise instances schedules a function to be called when the promise is rejected

// Async and Await :- Async and Await in JavaScript are powerful keywords used to handle asynchronous operations with promises.

// async :- The async function allows us to write promise-based code as if it were synchronous.

// async :- Asynchronous programming is a technique that enables your program to start a potentially long-running task and still be able to be responsive to other events while that task runs, rather than having to wait until that task has finished. Once that task has finished, your program is presented with the result.

// try catch :- it is used to handle the error-prone part of the code.

// finally :- The finally() method is used to return a Promise, when a promise is settled, Like then() and catch(), that is either fulfilled or rejected.

////////////////////////////// 10 ////////////////////////////////////////////////

//cookies:- JavaScript cookies are small data stored on a user's device by a web browser. 

// encodeURIComponent :- The encodeURIComponent() method encodes special characters including: , / ? : @ & = + $ #

// decodeURIComponent :- It decodes all escape sequences, including those that are not created by encodeURIComponent , like -.! ~*'() .

// localStorage :- localStorage in JavaScript allows web applications to store data locally within the user's browser – with no expiration date. The data isn't deleted when the browser is closed, and is available when the browser is opened again.

// key :- To store data in local storage, you use the setItem() method. This method takes in two arguments, a key and a value. If the key does not exist in local storage, the setItem() method will create a new key and assign the given value to it.

// setItem() : Adds key and value to localStorage. 

// getItem() : Retrieves/gets items from localStorage.

//  removeItem() : Removes an item from localStorage. 

// clear() : Clears all data from localStorage.

//  key() : Passes a number to retrieve the key of a localStorage.



// sessionStorage :- sessionStorage is similar to localStorage ; the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends

// setItem(key, value): It sets the data in the sessionStorage with the passed key and value. 

// getItem(key): This method will return the value of the key passed to it, if it is stored in the storage.

// removeItem(key): It will remove the passed key with its value from the storage.