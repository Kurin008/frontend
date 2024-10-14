// Module in JS
// export
import { fullName as nama, angka } from "./utils.js";

//export default
import ucapkanSalam from "./sayGreetings.js"; //bisa diganti alias tanpa "as"
import ucapkanSalam2 from "./sayGreetings/index.js";


console.log(nama);
console.log(angka);
console.log(ucapkanSalam());
console.log(ucapkanSalam2());