//JavaScript Function

//Cara 1. Function Declaration
// function greetings1()
// {
//     console.log("hello world");
// }
// greetings1(); //call / Execute Function

// //Cara 2. Function Expression
// let greetings2 = function()
// {
//     console.log("hello world");
// }
// greetings2();



//Parameter & Argument (input), return(output)

//                  parameter
// function greetings1(fullName)
// {
//     return "Hello " + fullName;
// }
// //                     argument
// let output = greetings1("Dave");
// console.log(output);

// //Cara 2
// let greetings2 = function(fullName)
// {
//     return "Hello " + fullName;
// }
// let output2 = greetings2("Bryan");
// console.log(output2);


//Function Hoisting
//cara 1
//                      argument
// let output = greetings1("Dave");
// console.log(output1);
// //                   parameter
// function greetings1(fullName)
// {
//     return "Hello " + fullName;
// }
// console.log(output);


//Global Scope & Local Scope
let x=10;
function foo()
{
    let y=20;
    console.log(x); //10
    console.log(y); //20
    if(y>10)    
    {
        let z=30;
        console.log(z); //30
        console.log(y); //20
    }
    // console.log(z); //ERROR
}

// console.log(y)  //ERROR
console.log(x); //10
foo(); 