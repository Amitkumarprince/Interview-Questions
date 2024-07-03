//////////////////javascript////////////
// javascript is a scripting or programming language that allows you to implement complex features on webpages.

//////////////////css////////////
// css is the acronym of "cascading style sheets"
// css :- css is a computer language for layingout and stracturing web pages (HTML or XML)

//////////////////html////////////
// html is the standard markup language for creating web pages. HTML describe the structure of a web pages








                //  | var || let || const

// global scope     | yes || no  || no
// function scope   | yes || yes || yes
// Block scope      | no  || yes || yes
                //  |     ||     ||
// Re-assigned      | yes || yes || no
// Re-decleared     | yes || no  || no
// Hosted           | yes || no  || no



// Object data type :- It is a non-primitive data type that consists of unordered key-value pairs.

// // NN BB SS U
// let a = null; //  Object
// let b = 345; // Number
// let c = true; //can also be false // boolean
// let d = BigInt("567") + BigInt("3") // bigint
// let e = "harry" // string
// let f = Symbol("I am  nice symbol") // symbol
// let g = undefined // undefined
// let h  // undefined
// console.log(a, b, c, d, e, f, g, h)
// console.log(typeof d)

// let b = num.toString() // b is a string.  string me badalne ke liye
// let arr = Array.from(name) // string se array me convert ker deta hai
// map use kerte hai jab naya array banana hota hai
// for each (bar-bar chalta hai) use kerte hai jab koi operation kerna hota hai

// // Array reduce method (total ko add ker dega



// // destructuring ////////////
// The destructuring  unpack values from arrays, or 
// properties from objects.

// let arr = [3, 5, 8, 9,12, 14]
// // let [a, b, c, d, ...rest] = arr
// // console.log(a, b, c, d, rest) // d tak print hoga baki array me aa jayga
// // let [a, , , ...rest] = arr // jitna blank comma rehaga utna skip ho jayga baki array me aa jayga
// // console.log(a, rest)
// let [a, , b, ...rest] = arr // comma ke jegha kuch nahi print hoga a ke jegha 3 aur b ke jegha 8 print hoga baki array me
// console.log(a, b, rest)