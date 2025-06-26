const accountId = 1443
let accountEmail = "nizam2google.com"
var accountPassword ="1234"
accountCity ="Mumbai"

// accountId = 2
accountEmail = "a.gmail.com"
accountPassword = "0000"
accountCity = "Dhanbad"
let accountState;

console.log( accountId, accountEmail, accountPassword, accountCity);
console.table( [accountId, accountEmail, accountPassword, accountCity, accountState]);

/*
prefer not to use var in js
because of issue in block scope and funtional scope
*/