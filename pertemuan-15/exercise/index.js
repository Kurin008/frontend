//Ubahlah syntax ES5 berikut ke dalam ES6

//1
import { calculateAge } from "./calculateAge.js";

const yearUntilRetirement = ({year, firstName}) => {
  const age = calculateAge(year);
  const retirement = 60 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    console.log(`${firstName} is already retired.`);
  }
};

yearUntilRetirement({year: 1987, firstName: 'John'});

//2.
import { addNumber } from "./addnumber.js";  
  
  console.log(addNumber(1, 2, 3, 4, 5, 6, 7));

//3.
import { calculateArea } from "./calculateArea.js"; 
  
let power = 2;  
let radius = 0;  



radius = 21;  
const area21 = calculateArea({ radius, power });  
radius = 7;  
const area7 = calculateArea({ radius, power });  
console.log(`area with 21 radius: ${area21}, and area with 7 radius: ${area7}`);

// 4.
import {makeAjaxRequest} from "./makeajaxrequest.js";

makeAjaxRequest('www.google.com');