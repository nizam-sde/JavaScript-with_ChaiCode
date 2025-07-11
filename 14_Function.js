function myName() {
    console.log("N");
    console.log("I");
    console.log("Z");
    console.log("A");
    console.log("M");
}

//      myName          Reference
//      myName()          Execution


// myName()         

/* 2nd Example

function addTwoNumbers(num1, num2){
    console.log(num1 + num2);
}
addTwoNumbers(2, 2)     */


/* different method

function addTwoNumbers(num1, num2){
    let result = num1 + num2
    return result
}
const result = addTwoNumbers(2, 2)
console.log("Result is :- ", result);       */

// easiest method 

function addTwoNumbers(num1, num2){
    return num1 + num2
}
const result = addTwoNumbers(2, 2)
// console.log("Result is :- ", result); 


function loginUserPopupMsg(userName){
    return `${userName} just logged in` 
}
// console.log(loginUserPopupMsg("Nizam"));


function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(2, 4, 6));

// passing of function  through objects

const soap = {
    productName: "dettol",
    price: 10
}

function handleObject(anyobject){
    console.log(`your order of ${anyobject.productName} will Cost RS ${anyobject.price}`);
    
}
// handleObject(soap)
handleObject({
    productName: "tide surf",
    price: 450
})

// passing of function through array

const myNewArray = [200 , 400, 600, 800]
function returnValue (getArray){
    return getArray[1]
}
console.log(returnValue(myNewArray));
