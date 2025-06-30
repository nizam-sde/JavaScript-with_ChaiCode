/* ********* Primitive data types

there are 7 types 

string, number, boolean, null, undefined, symbol, BigInt


JavaScript is a dynamic scoped language we do not require to decleare the variables value or data types
*/

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail = undefined

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 5478467556547898n

/* ************ Reference/Non-primitive data types

there are 3 types 

arrays, objects, functions

Arrays ex - */

const heros = ["iron man", "black widow", "captain roggers"]
//console.log(heros);


// objects {when we write in curly brackets in key : value points thats called objects}

let obj = {
    name: "nizam",
    age: 21,
    cgpa: 9.8
}
//console.log(obj);

// funtion (variable style)

const myFunction = function () {
}
//console.log(typeof myFunction);

/*  ********  Memories allocation in Js ***********

There are to type of memories is Js

1. Stack (primitive data) copy of variable we recieve in return, so no original data changes

2. Heap  (Non-Primitive) we recieve reference of orginal value, so if we change the value, original value will be changed

*/
