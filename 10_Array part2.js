const marvel_Heros = [`thor, ironman, spiderman`]
const dc_Evils = [`superman, flash, batman`]

// marvel_Heros.push(dc_Evils)
// console.log(marvel_Heros, "push method");

marvel_Heros.concat(dc_Evils)
console.log(marvel_Heros, "concat method");

const allHeros = marvel_Heros.concat(dc_Evils)
console.log(allHeros); //"concat method need to use like this"

const allNewHeros = [...marvel_Heros, ...dc_Evils] //spread operator
console.log(allNewHeros);

const another_array = [ 1, 2 , 3 ,[ 4 , 5 , 6] , [7, 56, 2] ]

const real_array = another_array.flat(Infinity);
console.log(real_array);

console.log(Array.isArray("Nizam"));
console.log(Array.from("Nizam"));

console.log(Array.from({name : "Nizam"})); //intresting case scenerio for interview

let score = 100
let sco = 200
let sc = 300

console.log(Array.of(score, sco, sc));
