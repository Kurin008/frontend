//asynchronus JS

//Synchronus -> single thread -> blocking
// console.log("proses 1");
// console.log("proses 2");
// console.log("Proses yang memakan waktu yang lama");
// console.log("proses 4");


//Asynchronus -> multi thread -> non-blocking
//1. Parallel
// setTimeout(()=>{
//     console.log("Proses 1")
// }, 3000); //delay 3 detik

// console.log("Proses 2");

// setTimeout(() => {
//    console.log("Proses 3") 
// }, 5000); //delay 5 detik

// console.log("Proses 4");

//2. Concurent
// setTimeout(() => {
//    console.log("Proses 1");
//    setTimeout(() => {
//     console.log("Proses 2");
//     setTimeout(() => {
//        console.log("Proses 3");
//        setTimeout(() => {
//         console.log("Proses 4");
//        }, 3000); 
//     }, 3000);
//    }, 3000);
// }, 3000);

// Cara membuat Promise
let condition = true;
const newPromise = new Promise ((resolve, reject)=>{
    if(condition){
        resolve("Berhasil");
    } else{
        reject("Gagal");
    }
});

//Cara pakai Promise
//1. then - catch
// newPromise.then((result) => result)
// newPromise.then(result2 => console.log(result2));
// newPromise.catch(error => console.log(error));

// //2. async - await
// //Harus dibuat dalam fungsi
// const consumePromise = async() => {
//     try{
//         let result = await newPromise;
//         console.log(result); 
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromise();

//Pakai promise yang sudah ada
//1. fetch
fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => console.log(json))

    // (async () => {
    //     let response = await fetch("https://jsonplaceholder.typicode.com/users");
    //     let json = await response.json();
    //     json.forEach(({ name }) => console.log(name));
    //   })();

//2. Axios
axios
.get("https://jsonplaceholder.typicode.com/users");
then((result) => console.log(result));