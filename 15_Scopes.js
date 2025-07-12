// var piyaz = 30
let allu = 20


if (true) {
    let allu = 60
    const tamatar = 20
    var piyaz = 200

    // console.log("Inner: ", allu);
    
}
// console.log(allu);
// console.log(tamatar);
// console.log(piyaz);


function one(){
    const name = "Nizam"
    
    function two(){
        const website = "youtube"
        console.log(name);
    }
    // console.log(website);

    two()
}
// one()

if (true){
    const userName ="Nizam"
    if (userName === "Nizam") {
        const website = " youtube"
        // console.log(userName + website);
        
    }
    // console.log(website);
    
}
// console.log(userName);

// ********************** Interesting ********************


addOne(5) //even if we write here it will run the code
function addOne(num){
    return num + 1
}



addTwo(5) // but in this case !not bcoz we stored the value of addTwo later and executed first
const addTwo = function (num) {
    return num + 2
}