//      Dates

/*
let myDate = new Date()
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toISOString().substring(0, 10));
console.log(myDate.toLocaleString());
*/

// if we want to declear a specific date

// let myCreatedDate = new Date(2024, 0, 23, 5, 3);
let myCreatedDate = new Date("01-14-2024");
// console.log(myCreatedDate.toLocaleString());

// if we want to specify like DD-MM-YYYY or YYYY-MM-DD

let currentDate = new Date();
// let day = String(currentDate.getDate()).padStart(2, '0');
// let month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-based
// let year = currentDate.getFullYear();

// let formattedDate = `${day}-${month}-${year}`;
// console.log(formattedDate);

console.log(`${currentDate.getDate()}/${currentDate.getMonth()+1}/${currentDate.getFullYear()} `);


//************** ********************

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.round(Date.now()/1000));


let newDate = new Date()
// console.log(newDate.getDay());

