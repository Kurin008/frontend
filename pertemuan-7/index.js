// Array in JavaScript
// Deklarasi Variable Array\

// Cara 1. Array Literal
// let numbers = [ 1, 2, 3, 4, 5];
// console.log(numbers);

// // cara 2. Kata kunci new
// let numbers2 = new Array(6,7,8,9,10);
// console.log(numbers2);

// // Tipe data yang bisa disimpan dalam array
// let numbers = [1,2,3,4,5]; //numbers
// let students = ["John", "jane", "Bob"]; //string
// let john = ["john", 30, true, [80,90,100]]; //mixed
// console.log(john);

// // Array Length
// console.log(numbers.length); //5
// console.log(students.length); //3
// console.log(john.length); //4

// // Cara mengakses elemen/data tertentu dalam array
// // melalui index array. Index selalu dimulai dari 0 
// console.log(numbers[2]); //3
// console.log(students[1]); //jane
// console.log(john[3]); //true
// console.log(john[3][1]); //90

// let numbers2 = [1,2,3,4,5,6,7,8,9,10];
// console.log(numbers2[numbers2.length -1]); // paling akhir
// console.log(numbers[numbers2.length / 2-1]); // di tengah 

// let index = numbers2.findIndex(function(item)
// {
//     return item == "7";
// })
// console.log(index); 

//Array Method
let array = [1,2,3,"hello", false, true];

//1.toString()
console.log(array.toString());

//2. join()
console.log(array.join());
console.log(array.join(" "));
console.log(array.join("-"));
console.log(array.join("#"));

//3. pop()
array.pop();
console.log(array); //hapus paling akhir

//4. push()
array.push("selamat pagi"); //taruh di akhir
console.log(array);

//5. shift()
array.shift(); //hapus paling awal
console.log(array);

//6. unshift()
array.unshift("selamat pagi"); //taruh di awal
console.log(array);

//7. splice()
array.splice(2, 1); //hapus
console.log(array);

array.splice(1, 1, 1); //ganti (hapus lalu tambah)
console.log(array);

array.splice(2,0,2,3); //tambah
console.log(array);

//8. concat()
let buah = ["pisang", "apel", "jeruk"];
let sayur = ["tomat", "bayam","wortel"];
let biji = ["kedelai", "kacang tanah", "kacang polong"];

let makanan = buah.concat(sayur,biji);
console.log(makanan);

//9. slice()
let sayuran = makanan.slice(3,6);
console.log(sayuran);

let bijian = makanan.slice(6);
console.log(bijian);