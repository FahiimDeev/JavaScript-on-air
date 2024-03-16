// immediately invoked function expression

(function tea(){
    //named iife
    console.log(`DB Connected`)
})(); 

( (name) => {
    console.log(`this is the ${name} database`);
})("Fahim's")