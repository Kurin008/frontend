// Array

let people = ["Greg", "Mary", "Devon", "James"];
//1
// for(let i=0; i<people.length; i++)
// {
//     console.log(people[i]);
// }

//2
// people.forEach(function(item)
//     {
//         console.log(item);
//     });

//3
// people.shift();

// //4
// people.pop();

// //5
// people.unshift("Matt");

// //6
// people.push("Dave"); 

// //7
// for(let i=0; i<people.length; i++)
// {
//     console.log(people[i]);
//     if (i>0){
//         break;
//     }
// }

// //8
// let buatslice = people.slice(2,);
// console.log(buatslice);

// //9
// people.splice(2,1,"Elizabeth","Artie");
// console.log(people);

// //10
// let withBob = ["Bob"];  
// let denganbob = people.concat(withBob);
// console.log(denganbob);


//object
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

//1
programming.languages.push("Go");

//2
programming["difficulty"] = 7;

//3
delete programming.jokes;

//4
programming.isFun = true;
console.log(programming);

//5
programming.languages.map((language, index) => {
    console.log(`${index} - ${language}`);
});