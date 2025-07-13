const user = {
    userName : "Nizam",
    price: 100000,

    welcomeMessage: function(){
        console.log(`${this.userName}, welcome to website`);
        
    } 
}

// user.welcomeMessage()
// user.userName = "alfaz"
// user.welcomeMessage()

// function chai(){
//     let userName = "Nizam"
//     console.log(this);
//     console.log(this.userName);
    
// }
// chai()

// this works inside objects not in function

// how to decleare function through arrow function

// const chai = function(){
//     let userName = "alFaz"
//     console.log(this.userName);
    
// }
// chai()

const chai = () => {
    let userName = "alFaz"
    console.log(this.userName);
    
}
// chai()

// syntax for basic arrow function

// const add2Nos = (num1, num2 ) => {
//     return num1 + num2
// }
// console.log(add2Nos(2, 3));

// this is called implicit return (maan lete hai aapko return krne ki jarurat nhi hai)

// const add2Nos = (num1, num2 ) => num1 + num2
// const add2Nos = (num1, num2 ) => (num1 + num2) // in reactjs this syntax use a lot
const add2Nos = (num1, num2 ) =>({userName: "Nizam"}) // this is some you use objects in arrow function 
console.log(add2Nos(2, 3));

const myArray = [ 1, 2 , 3, 4 , 5]

// myArray.forEach()
