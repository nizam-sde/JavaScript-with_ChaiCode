// truethy

const userEmail = "a@a.com";

if (userEmail) {
  console.log("Yeah! you have email");
} else {
  console.log(" you dont have email");
}
/*
    truethy values
     "0" , 'false' , " " , [] , {} , function(){} , except falsey list values everything is truthy

     falsey values
     false, 0 , -0 , bigInt 0n , "" , null , undefined, NaN , document.all
*/
const userEmailID = "";

if (userEmailID) {
  console.log("Yeah! you have email");
} else {
  console.log(" you dont have email");
}

if (userEmail.length === 0) {
  console.log("Array is empty");
}

const objempty = {};
if (Object.keys(objempty).length === 0) {
  console.log("Object is Empty");
}

//Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10;
val1 = null ?? 12;
val1 = undefined ?? 15;
val1 = null ?? 10 ?? 20;

console.log(val1);

// ternary operator

// condition ? true : false

const iceTea = 100;

iceTea >= 80 ? console.log("more then 80") : console.log("less then 80");
