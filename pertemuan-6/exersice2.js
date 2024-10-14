// nomor 1
let output = (function (berat,tinggi){
    return total = berat / (tinggi * tinggi); 
})(70,1.8);
console.log(output);

// nomor 2
function sayHello(callback) {
    let result = callback(70,1.8);
    console.log(result);
}

sayHello(function (berat,tinggi){
    return total = berat / (tinggi * tinggi);
})  