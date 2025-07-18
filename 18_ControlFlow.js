 // if

// const isUserLoggedIn = true

//  if (2 === "2" ) {
//     console.log(executed);
//  }

 //             operators

 // <, >, <=, >=, ==, !=, ===, !==

//  const temperature = 41

//  if (temperature < 50) {
//     console.log("less then 50");
//  } else{

//      console.log("temp greater then 50");
//  }
 
//  const score = 200

//  if ( score > 100){
//     const power = "fly"
//     console.log(`User Power: ${power}`);
    
//  }

// short hand notation
// example of implicit code(maan liya hai ki hai)

const balance = 1000 

if (balance > 500) console.log("test");

//nesting (multiple condition checking)

if (balance < 500) {
    console.log("less then");
}else if (balance<750){
    console.log("less then 750");
} else if (balance < 900){
    console.log("less then 900");
}else{
    console.log(`Your avilable balance is = ${balance}`); 
}

const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

if (userLoggedIn && debitCard) { //both condition need to be true
    console.log("Allow to buy Course");
}
if (userLoggedInFromEmail || userLoggedInFromGoogle) { //single condition true
    console.log("Avail the offer");
}