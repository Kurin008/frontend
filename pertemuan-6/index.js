//IIFE & Callback Function
// 1. IIFE (Immediately Invoked Function Expression)
// a. no parametetr, args & return value
// (function () {
//     console.log("hello world");
// })();

// // b. With params, args & return value
// let output = (function (fullName){
//     return "hello " + fullName
// })("John Doe");
// console.log(output);



// 2. Callback Function
// a. No params, args & return value
// function sayHello(callbaack) {
//     callbaack();
// }

// sayHello(function (){
//     console.log("Hello world"); //callback function
// })

// b. with params, args & return value
// cara 1
// function sayHello(callback) {
//     let result = callback("John Doe");
//     console.log(result);
// }

// sayHello(function (fullName){
//     return "hello " + fullName; //returnnya callback function
// })
// cara 2
function sayHello(callback) {
    let result = callback("John Doe");
    return result;
}

let output = sayHello(function (fullName){
    return "hello " + fullName; //returnnya callback function
})
console.log(output);