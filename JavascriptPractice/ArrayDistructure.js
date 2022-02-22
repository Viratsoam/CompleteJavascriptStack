// 1. Object Destructuring
const obj = {firstName:"Vikas",lastName:"Soam"};
const {firstName,lastName} = obj;
console.log(firstName," ",lastName);

// 2. Array Destructuring
const numberArray = [1,2,3,4,5,6,7,8,9];
const [firstNumber,secondNumber,...allNumber] = numberArray;

console.log(firstNumber,secondNumber,allNumber);
