// String Literals, Arrow Function, default parameter

//1. string literals
let fullName = "John doe";
let age = 33;
let address = "Manado";

//Halo nama saya John Doe, umur saya 33 tahun
//dan saya tingal di manado

let kalimat = "Halo nama saya " + fullName + "umur saya " + "dan saya tinggal di " + address;
console.log(kalimat);

// menggunakan badpick ``(diatas tab)
let kalimat2 = `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`;
console.log(kalimat2);

//2. arrow function
function sayGreetings1(fullName){
    return `halo nama saya ${fullName}`;
}
console.log(sayGreetings1("John Doe"));

const sayGreetings2 = (fullName) => `Halo nama saya ${fullName}`;
console.log(sayGreetings2("John Doe"));

// arrow function pada IIFE
let output1 = (() => `Hello`)();
console.log(output1);

//arrow function pada callback
let numbers = [1,2,3,4,5];
let output2 = numbers.map((item) => item);
console.log(output2);

//3.  default parameter
const sayGreetings3 = (fullName) => {
    if (fullName === undefined){
        fullName = "john Doe";
    }
    if (!age) {
        age = 35;
    }
    if (!address) {
        address = "Manado";
    }
    console.log(`Halo nama saya ${fullName} umur saya ${age} tahun saya tinggal di ${address}`);
}
sayGreetings3("Stenly",35);

const sayGreetings4 = (fullName="John Doe", age = 30, address = "Manado") =>{
    return `Halo nama saya ${fullName} umur saya ${age} tahun saya tinggal di ${address}`;
}
console.log(sayGreetings4);