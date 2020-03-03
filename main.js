/******************
 * YOUR CODE HERE *
 ******************/
function fizzBuzzSingleNumber(num){
  let result = 0;
for(let i = 0; i < num; i++){
  if(num % 5 === 0 && num % 3 === 0){
    return 'FizzBuzz'} 
if(num % 5 !== 0 && num % 3 !== 0){
  return num
  }
  else if (num % 3 === 0 && num % 5 !== 0){
  return 'Fizz'};
  
if(num % 5 === 0 || num % 3 !== 0)
return 'Buzz'

}
}


// // function getMiddleLetters(str){
// let result = "";
// for(let i = 0; i < str.length; i++){
// if(result.length % 2 === 0){
//   return 
// }
// if(result.length % 2 === 1){
//   return
// }
// }
// }


// function getNextLetter(str){
//   let result = [];
//   const alpha = abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ;
//   for(let i = 0; i < alpha.length;i++){

//   }
// }
// function getAverage(num){
// let result = 0;
// for(let i = 0; i < num.length; i++){}
// let 
//}


// function removeTrolls(cap){
// for(cap of caps)
// let cap = 

// }
// function triStateAreaOnly(cities){
// for(city of cities){
//   cities = 
// }
// }


// function cipher(str){ 
//   let result = '';
//   for(let i = 0; i < str.length; i++){

//   }
// return result
// }

// }
// }

// function addToMultiDigitNumbers(fakeNum, arrayOfNum){

// }


// function hyphenateNames(namesMaybe){
// let result = '';
// for(let i = 0; i < namesMaybe.length; i++){

// }

// }





/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof fizzBuzzSingleNumber === 'undefined') {
  fizzBuzzSingleNumber = undefined;
}

if (typeof getMiddleLetters === 'undefined') {
  getMiddleLetters = undefined;
}

if (typeof getNextLetter === 'undefined') {
  getNextLetter = undefined;
}

if (typeof getAverage === 'undefined') {
  getAverage = undefined;
}

if (typeof triStateAreaOnly === 'undefined') {
  triStateAreaOnly = undefined;
}

if (typeof removeTrolls === 'undefined') {
  removeTrolls = undefined;
}

if (typeof cipher === 'undefined') {
  cipher = undefined;
}

if (typeof addToMultiDigitNumbers === 'undefined') {
  addToMultiDigitNumbers = undefined;
}

if (typeof hyphenateNames === 'undefined') {
  hyphenateNames = undefined;
}


module.exports = {
  fizzBuzzSingleNumber,
  getMiddleLetters,
  getNextLetter,
  getAverage,
  triStateAreaOnly,
  removeTrolls,
  cipher,
  addToMultiDigitNumbers,
  hyphenateNames,
}
