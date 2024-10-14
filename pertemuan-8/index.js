// // JavaScript object & conditional

// // deklarasi object
// // Object Literal
// let john = {
//     firstName: "John",
//     age: 30,
//     isMarried: true,
//     grade: [80,90,100],
//     sayGreetings: function(){
//         console.log("Hello my name is " + this.firstName);
//     },
//     adress: {
//         street: "Jl.Arnold Mononutu Airmadidi",
//         city: "Minahasa Utara",
//         province: "Sulawesi Utara",
//         postalcode: 95371,
//     }
// };
// console.log(john);

// // Mengakses properti dalam object
// // 1. Dot notation
// console.log(john.firstName); // john
// console.log(john.age); // 30
// john.age = 31; // ubah nilai
// console.log(john); // age 31

// john.job = "Teacher"; // tambah properti baru
// console.log(john);

// // 2. Bracket notation
// console.log(john["isMarried"]); //true
// john["nationality"] = "Indonesia"; // tambah properti baru
// console.log(john);

// // Object method
// john.sayGreetings();

// // Object inside object
// console.log(john.adress);
// console.log(john.adress.city);

// // delete properti dalam object
// delete john.grade;
// console.log(john);


// JavaScript Conditional
// 1. if-else
// Jika suhu hari ini lebih dari atau sama dengan 37,
// tampilkan suhu hari ini panas
// Jika tidak, tampilkan suhu hari ini dingin

let suhu = 39;
if(suhu >= 37) {
    console.log("suhu hari ini panas");
}
else {
    console.log("suhu hari ini dingin");
}

// 2. if-else if-else
// Jika nilai 100-80 tampilkan grade A
// Jika nilai 70-79 tampilkan grade B
// jika nilai 50-69 tampilkan graade C
// Jika nilai dibadah 50 tampilkan grade D
let grade = 90;
if (grade >= 80 && grade <=100){
    console.log("grade A")
} else if (grade >= 70 && grade <= 80){
    console.log("grade B")
} else if (grade >= 50 && grade <= 70){
    console.log("grade C")
} else if (grade >= 50 && grade <= 60){
    console.log("grade D")
} else{
    console.log("grade D")
} 

// 3. Switch-case
// Jika angka 1 tampilkan January
// Jika angka 2 tampilkan February
// Jika angka 3 tampilkan Maret
// :
// Jika angka 12 tampilkan Desember

let number = 3;
switch(number){
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("Maret");
        break;
    default:
        console.log("Not found");
        break;
}