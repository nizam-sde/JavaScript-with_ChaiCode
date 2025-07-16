// Immediately Invoked Function Expressions (IIFE)

(function chai (){
    // named IIFE (chai)
    console.log(`DB Connected`);
    
})();

//IIFE / Simple IIFE
(
    () => {
        console.log(`DB 2nd Connected`);  
    }
) ()
