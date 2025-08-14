// Video 6 & 7 Data Type Conversion Confusion

let score = "33"

//console.log(typeof  score);

let valueInNumber = Number(score)
//console.log(typeof  valueInNumber);

/*  "33" =          33
    "33abc" =       NaN
    null =          0
    undefined =     NaN
    true = 1        false = 0
    "Nizam"         NaN
    
*/
    
    let isLoggedIn ="nizam"

    let booleanIsLoggedIn = Boolean(isLoggedIn)
   // console.log(booleanIsLoggedIn);

    /* 1 =  true    0 =     false
       "" = false
       "Nizam" = true */

       let someNumber = 35
       let stringNumber = String(someNumber)
      // console.log(stringNumber);
      // console.log(typeof stringNumber);
       
//  *********************** Operations ********************

let value = 3
let negValue = -value
//console.log(negValue);

/*
console.log(2 + 2);     addition
console.log(2 - 2);     substraction
console.log(2 / 2);     divide
console.log(2 * 2);     multiplication
console.log(2 ** 2);    expontiation
console.log(2 % 2);     modulus
*/

let str1 = "hello"
let str2 = " Nizam"

//console.log(str1+str2);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");


// console.log((3 + 4) * 5);
// console.log(+true);

let num1, num2, num3

// num1 = num2 = num3 = 2 + 2 this type of coding not preferred in coding indutry

let gameCounter = 100
gameCounter++

console.log(gameCounter);
