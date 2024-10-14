const addNumber = (...numbers) => {  
    return numbers.reduce((sum, num) => sum + num, 0);  
  };

export{
    addNumber
}