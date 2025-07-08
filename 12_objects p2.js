//object singleton, how to declear with the help of constructor

const tinderUser = new Object ()  //singleton object ex -
// const tinderUser = {} // object literals ex -

tinderUser.id = "00345"
tinderUser.name = "Nizam"
tinderUser.isLoggedIn = "true"

// console.log(tinderUser);

const regularUser = {
    email : "someOneIsnot@Avilable.com",
    fullName: {
        userId: "@reg3",
        userName: "Rega Chu"
    }
}
// console.log(regularUser);
// console.log(regularUser.fullName.userId); //this is used to fetch inside object data particularly


const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = obj1 + obj2
const obj3 = Object.assign(obj1, obj2) // to assign object ex -
const obj4 = Object.assign({}, obj1, obj2) //this is recommended to use


const obj5 = {...obj1, ...obj2,} //this is modern & easy to use (Spread method)
// console.log(obj5);

// ex - if you are accessing one from lots of user data stored
const users = [
    {
        id : 1,
        email: "e@mail.com"
    },
    {
        id : 1,
        email: "e@mail.com"
    },
    {
        id : 1,
        email: "e@mail.com"
    }
]

// console.log(users[1]);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser)); //if we want in key;value term output


// console.log(Object.hasOwnProperty('iSLogged'));