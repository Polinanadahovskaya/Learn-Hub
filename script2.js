let firstNumber = document.getElementsByClassName('tel').slice(0, 1);
let secondNumber;
let telNumber = document.getElementsByClassName('tel').slice(1);
let threeNumber = document.getElementsByClassName('tel').slice(1, 4);
let fourNumber = document.getElementsByClassName('tel').slice(4, 7);
let fiveNumber = document.getElementsByClassName('tel').slice(7, 9);
let sixNumber = document.getElementsByClassName('tel').slice(9, 11);
let numTel = document.getElementsByClassName('tel')


// let result =[]

// if (firstNumber === 8 || firstNumber === 7){
//     firstNumber = '+';
//     secondNumber = 7;
//     let a  = `${firstNumber}${secondNumber}(${telNumber})${fourNumber}-${fiveNumber}-${sixNumber}`
//     result.push(a)
// } else if (firstNumber === '+'){
//     result.push(numTel)
// } else if(numTel !== 'number' || numTel.length !== 12 || numTel.length === 0){
//     return null
// } 

// return `привет: ${result.toString()}`

// const number = numTel; 
// const pattern = new RegExp(`(^\\d{${number.length % 10}})(\\d{3})(\\d{3})(\\d{2})(\\d{2}$)`);
// const formattedNumber = number.replace(pattern, '+$1($2)$3-$4-$5');
// console.log(formattedNumber); 