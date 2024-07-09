
// join :- the join() method lets you take an array and combine its elements into one string.

// pop :- the pop method removes the last element from an array and returns that value to the caller.

// push :- the push method adds elements to the end of an array and returns the new length of the array.


// shift :- the shift method removes the first item of an array and returns that value to the caller.
// The shift() method changes the original array.

// unshift :- the unshift method adds new elements to the beginning of an array  and returns the new length of the array.
// The unshift() method overwrites the original array.


///////// 18 //////
// concat :- the concat method allows you to merge multiple arrays at once. 

        // सरणी के तत्वों को स्ट्रिंग में परिवर्तित करके और फिर उनके यूनिकोड कोड बिंदुओं की तुलना करके उनकी तुलना करता है।
// Sort :- the Sort method compares the elements of the array by converting them into strings and then comparing their Unicode code points.

// compare :- When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
// जब sort() फ़ंक्शन दो मानों की तुलना करता है   यह मानों को compare फ़ंक्शन पर भेजता है, और लौटाए गए (नकारात्मक, शून्य, सकारात्मक) मान के अनुसार मानों को क्रमबद्ध करता है।
//  If the result is negative, a is sorted before b . If the result is positive, b is sorted before a .

// reverse :-the reverse method  reverses the order of the elements in an array. 

// splice :-the splice method  is used to change the contents of an array by removing or replacing existing elements and adding new elements.
//  splice modifies the original array and returns an array of the removed elements.

//  slice :-the slice method  returns selected elements in an array, as a new array.



// //////// 19 // /////
// forEach :- The forEach method allows you to iterate over an array and per'form an operation on each element of the array.
// जो आपको किसी सरणी पर पुनरावृति करने की अनुमति देता है  और सरणी के प्रत्येक तत्व पर एक ऑपरेशन निष्पादित करें।

////////////20/////////////
// map method :- The map method creates a new array by calling a function on every element of the original array and storing the results in a new array.
// यह किसी फ़ंक्शन को कॉल करके एक नया ऐरे बनाता है        मूल सरणी के प्रत्येक तत्व पर 
// यह मूल सरणी के प्रत्येक तत्व पर एक फ़ंक्शन को कॉल करके एक नई सरणी बनाता है 
// map() returns the new array, and the original array is unchanged.

// let arr = [45, 23, 21]
// let a = arr.map((value)=>{
// //   console.log(value + 1)
//   return value + 1
// })
// console.log(a) // Array(3) [ 46, 24, 22 ]

// Filter method :- The filter() method creates a new array filled with elements that pass a test provided by a function.
//                    फ़िल्टर() विधि एक नई सरणी बनाती है        उन तत्वों से भरा हुआ          जो परीक्षा में उत्तीर्ण  होते हैं एक फ़ंक्शन द्वारा प्रदान किया गया.
// The filter() method does not execute the function for empty elements
// The filter() method does not change the original array.

// reduce method :-The "reduce()" method is used to reduce an array to a single value by applying a function to each element.
// किसी सारणी को छोटा करने के लिए उपयोग किया जाता है /आवेदन करके एकल मान पर / प्रत्येक तत्व के लिए एक फ़ंक्शन।

// let arr3 = [1, 2, 3, 5, 2, 1]
// let newarr3 = arr3.reduce((h1, h2)=>{
//   return h1 + h2
// })
// console.log(newarr3)