// Singleton

// object.create

// objects literals

const mySymbol = Symbol("Key1") // symbol declear syntax

const jsUser = {
    name: "Nizam",
    "full name": "Mohammad Nizam",
    course: "FullStack_WebDev",
    [mySymbol]: "Sym1", // symbol data input syntax
    age: 21,
    email: "Nizam@reatcdev.com",
    location: "Google headQuaters",
    isLogged: "true",
    lastLogin: ["Monday", "Friday"]
}
/*
console.log(jsUser.lastLogin);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySymbol]); //this is how we can access symbols #interview
*/

// to manupulate data
jsUser.email = "nizaM@VsCOde.com"
// Object.freeze(jsUser) // it will prevent front data change further
jsUser.email = "Nizam@codeRunner.com"
// console.log(jsUser);


// ******************* Functions *****************

jsUser.greeting = function(){
    console.log("Hello JS User");
}
jsUser.greetingTwo = function(){
    console.log(`${this.name}`); // if we wamrt to take reference of same object we use like this
}



// console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
