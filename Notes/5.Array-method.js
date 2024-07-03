////////////////////17///////////////////////////
// let num = [1, 2, 3, 34, 4]

// let c = num.join("_") // ye bhi array ko string me badal deta hai
// join :- the join() method lets you take an array and combine its elements into one string
// console.log(c, typeof c)

// pop change the same array///
// pop :- The pop() method removes (pops) the last element of an array.
// num.pop() // pop remove the last elements
// console.log(num)

// ye alag se chalana hai //dubara nahi, nahi to yahi se 34 nikal lega
// let r = num.pop() // pop returns the popped elements (last remove element)
// console.log(r)

// num.push(56)
// let r = num.push(56) //(56 add ker ke length dega) push return the new array length
// console.log(r) // ye length return kerta hai
// console.log(num) // add ker ke show keraga

// num.shift() // modify the original array
// console.log(num)
// let r = num.shift()
// console.log(r) //Remove first elements from the start of the array and jo nikala hai use print ker dega


// num.unshift(78)
// console.log(num)
// let r = num.unshift(78) //
// console.log(r) // return new array length
// console.log(num)

///////// 18 //////
// let num = [1, 2, 3, 4, 5]
// let num1 = [11, 12, 13, 14, 15]
// let num2 = [21, 22, 23, 24, 25]

// delete num[0]  // matlab 1
// console.log(num) // <1 empty slot>
// console.log(num.length) // delete kerne pe length kam nahi hota hai

// let newArray = num.concat(num1) // (concat) add two or more array
// console.log(newArray)


// let newArray1 = num.concat(num1, num2)
// console.log(newArray1)
// console.log(num,num1, newArray)


// // Sort method // modify original array(in alphabitically)
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229] // ise string man ke kerta hai
// num.sort()  // 14, 22, 229,3, 5, 551, 6, 7, 8 // arrange alphabitically
// console.log(num)

// let compare = (a, b)=>{ // compare ke jaghe kuch bhi likh sakte hai
//     return a - b
//   } // assending order //  sort ka hi function hai
//   num.sort(compare)
//   console.log(num)


// let compare1 = (a, b)=>{
//   return b - a
// } // desending order //  sort ka hi function hai
// num.sort(compare1)
// console.log(num)

//   let num = [1, 2, 3, 34, 5]
// num.reverse()
// console.log(num) // array ko reverse ker deta hai

// splice and slice
// let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// num.splice(2, 4, 1021, 1022, 1024, 1025, 1026)
// console.log(num)
// 2 se 4 element delete ker ke yr 1022, 1022, 1024, 1025 sare add ker do 

//  let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
// let deletedValues = num.splice(2, 4, 1021, 1022, 1024, 1025)
// console.log(deletedValues) // jo delete hua hai wo return ho jayga
// console.log(typeof deletedValues) // object (modify original array)

// create new array// slice not modify orijinal array
let num = [551, 22, 3, 14, 5, 6, 7, 8, 229]
let newNum = num.slice(3) // create new array
// // // let newNum = num.slice(3, 5) // 5 not included
// // let newNum = num.slice(3, 4)  //4 not included
console.log(newNum)

// //////// 19 // /////
// let num = [3, 5, 1, 2, 4] //Array
// for loop
// for (let i = 0; i < num.length; i++) {
//   console.log(num[i])
// }

// // ForEAch Loop  // html collection me nahi chala sakta
// forEach :- The forEach loop is a method in JavaScript that allows you to iterate over an array and perform an operation on each element of the array.

// map use kerte hai jab naya array banana hota hai
// for each use kerte hai jab koi operation kerna hota hai
// // forEach Loop
// num.forEach((element) => {
//   console.log(element * element)
// })

// // Array.from // string se array me convert ker deta hai
// html collection me ye chala sakte hai
// koi aisa object jise array baniya ja sakta hai us me array.for use kerte hai

// let name ="Harry" // this is string
// console.log(name)
// let arr = Array.from(name) // string se array me convert ker deta hai
// console.log(arr)
// console.log(typeof arr) // now this is array

// // for...of short cut tarika hai array item ko excess kerne ka
// for in loop :- The for...in loop in JavaScript iterates over the enumerable properties of an object, allowing you to access each property name (key) sequentially.

// let num = [3, 5, 1, 2, 4] //Array
// for (let i of num){
//   console.log(i)
// }


// // for in  (vvi)
// for in loop :- The for...in loop in JavaScript iterates over the enumerable properties of an object, allowing you to access each property name (key) sequentially.

// for (let i in num){
//   console.log(i) // 0 to 4 (keys)
// //  console.log(num[i]) // num ko bari bari se
// } 
// 
////////////20/////////////

// let arr = [45, 23, 21]

// // Array map method 
// map method :- In JavaScript, map() is a method of the Array object. It creates a new array by calling a function on every element of the original array and storing the results in a new array. map() returns the new array, and the original array is unchanged.
// map use kerte hai jab naya array banana hota hai
// for each (bar-bar chalta hai) use kerte hai jab koi operation kerna hota hai
// map array return kerta hai

// arr.map((value)=>{
//   console.log(value)
// })

// // for new array
// let a = arr.map((value)=>{
// //   console.log(value)
//   return value + 1
// })
// console.log(a)

// let a = arr.map((index, value, Array)=>{
// //   console.log(index, value, Array)
// //   return value + index
// })
// console.log(a)

// // Practice Problem 4
// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
//   let n = arr.map((x)=>{
//   return x*x
// })
// console.log(n)


// Array Filter method (filter function)
// Filter method :- The filter() method creates a new array filled with elements that pass a test provided by a function. The filter() method does not execute the function for empty elements. The filter() method does not change the original array.
// filter array return kerta hai
// let arr2 = [45, 23, 21, 3, 5, 0, ]
// let a2 = arr2.filter((a)=>{
//   return a<10
// })
// console.log(a2)
// console.log(arr2)  // orijinal array change nahi hoga

// // Practice Problem 3
// let arr = [1, 2, 30, 4, 50, 6, 7, 83, 670]
//   let n = arr.filter((x)=>{
//   return x%10 == 0
// })
// console.log(n)


// // Array reduce method (total ko add ker dega
// reduce method :- a predefined method used to reduce an array to a single value by passing a callback function on each element of the array.
// piche hue kam ko h1 man leta hai or agle ko h2  )
// reduce ek value return kerta hai(ye ek function leta hai)
// let arr3 = [1, 2, 3, 5, 2, 1]
// let newarr3 = arr3.reduce((h1, h2)=>{
//   return h1 + h2
// })
// console.log(newarr3)
