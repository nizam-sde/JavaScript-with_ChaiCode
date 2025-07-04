// primitive data type ke kisi bhi elemnt ko store kr skte hai array me aur wo fir bhi array he rahega
//collection of different variable in a single place is called array

// arrays can be re-decleared

const myArr = [0, 1 , 5 , 7 , 6]
const myHeros = ["Spiderman", "blackwidow"]
// console.log(myArr[0]);

// Array method

myArr.push(8) //add element at the end
myArr.pop() //it will pop out the data from last

myArr.unshift(0) // add element in 1st place
myArr.shift() // remove element from 1st place

// console.log(myArr.includes(9)); // it will show the feeded data isAvilable in array or not

const newArr    = myArr.join() //.join adds data also conv it to string

// console.log(myArr, "i'm still a array");
// console.log(newArr, "now i'm a string now");

// slice , splice

const myn1 = myArr.slice(1,4)
console.log("A", myArr);

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 4) // manupulate original array
console.log(myn2)







