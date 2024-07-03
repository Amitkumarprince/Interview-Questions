// the setTimeout() function is utilized to introduce a delay or to execute a particular function after a specified amount of time has passed.
// setTimeout(function() {
//     alert("I am inside of settimeout")
//   }, 2000);

// The setInterval() method calls a function at specified intervals (in milliseconds). It continues calling the function until clearInterval() is called or the window is closed. This method is useful for tasks that need periodic execution, like updating animations or refreshing data.
// setInterval(function() {
  //   alert("setinterval")
  // }, 5000)

// The onclick function is an event handler in JavaScript that is used to respond to a specific event a mouse click on a particular HTML element. This event can be triggered when a user clicks on a button, a link, an image, or virtually any other clickable element on a web page.
// let a = document.getElementsByClassName("container")[0]
// a.onclick = () => {
//   let b = document.getElementsByClassName("container")[0]
//   b.innerHTML = "Hello World!"
// }

// The addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event is delivered to the target. This method allows multiple event handlers on an element, enabling dynamic and flexible interaction management within web applications.
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