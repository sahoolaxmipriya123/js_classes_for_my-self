// Imediately Invoked Function Expression --IIFE

(function callMe(){
    // named iife
     console.log(`Hello World`)    //iife  (global scope polution ko hatane ne keliye iife use kiya gaya)
})();

( (name) =>{
    console.log(`hello code world to ${name}`)
})("laxmipriya")


// java script execution context

// ==>global execution context
// ==>functional execution context
// ==>eval execution context

