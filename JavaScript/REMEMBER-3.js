
/////////////////////// 8 /////////////////////
// setTimeout :- the setTimeout() function is used to introduce a delay or to execute a particular function after a specified amount of time has passed. 
// सेटटाइमआउट() फ़ंक्शन का उपयोग विलंब शुरू करने या एक निर्दिष्ट समय बीत जाने के बाद किसी विशेष फ़ंक्शन को निष्पादित करने के लिए किया जाता है।

// setInterval :- The setInterval() method calls a function at specified intervals (in milliseconds). It continues calling the function until clearInterval() is called or the window is closed. 
// सेटइंटरवल() विधि निर्दिष्ट अंतराल पर एक फ़ंक्शन को कॉल करती है

// This method is useful for tasks that need periodic execution, like updating animations or refreshing data.
// यह विधि उन कार्यों के लिए उपयोगी है जिन्हें समय-समय पर निष्पादन की आवश्यकता होती है, जैसे एनिमेशन अपडेट करना या डेटा ताज़ा करना।


// onclick :- The onclick function is an event handler in JavaScript that is used to respond to a specific event, a mouse click on a particular HTML element. 
// इस घटना को ट्रिगर किया जा सकता है/ जब कोई उपयोगकर्ता किसी वेब पेज पर किसी बटन, लिंक, छवि या वस्तुतः किसी अन्य क्लिक करने योग्य तत्व पर क्लिक करता है।
// This event can be triggered when a user clicks on a button, a link, an image, or virtually any other clickable element on a web page.

// addEventListener :- The addEventListener() method is used to attach an event handler to a particular element.  

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
// Synscronaus programing :- Synchronous in Javascript refers to the execution of a program code in a blocking manner. 

// asynchronous programing :- Asynchronous in JavaScript refers to the execution of code in a non-blocking manner.

//callback :- A function passed as an argument to another function, to be executed after the first function completes.

//                  जावास्क्रिप्ट में कॉलबैक नरक होता है     // जब एक फ़ंक्शन के भीतर एकाधिक कॉलबैक नेस्ट किए जाते हैं
// Callback hell :- Callback hell in JavaScript occurs when multiple callbacks are nested within a function,             creating a complex and hard-to-maintain code structure that resembles a pyramid,
// एक जटिल और कठिन-से-रखरखाव कोड संरचना बनाना   जो एक पिरामिड जैसा दिखता है,

//              एक पृष्ठ पर जितनी आवश्यक हो उतनी जावास्क्रिप्ट फ़ाइलें गतिशील रूप से लोड करें,
// loadScript :- dynamically load as many JavaScript files as necessary on a page, but make sure you consider the order in which files must be loaded.
// सुनिश्चित करें कि आप उस क्रम पर विचार करें जिसमें फ़ाइलें लोड की जानी चाहिए।


// Promises :- JavaScript Promises used to simplify managing multiple asynchronous operations, preventing callback hell and unmanageable code.

// then :- The then() method provides two callbacks: One funtion to run when a promise is fulfilled and one funtion to run when a promise is rejected.

// catch :- The catch() method of Promise instances schedules a function to be called when the promise is rejected


// Q:-14 Async & Await in JS?
// Async and Await in JavaScript are powerful keywords used to handle asynchronous operations with promises.

// async :- The async function allows us to write promise-based code as if it were synchronous.

// try catch :- it is used to handle the error-prone part of the code.

// finally :- The finally() method is used to return a Promise, when a promise is settled, Like then() and catch(), that is either fulfilled or rejected.