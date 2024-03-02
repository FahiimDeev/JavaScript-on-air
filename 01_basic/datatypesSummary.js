// Primitive - 7 types
/*
    string, boolean, number, null, undefined, symbol, bigInt, 
*/

// Reference type (also known as non primitive)
/*
    array, objects, functions,
*/

// Javascript is dynamically typed language

const score = 100
const scoreValue = 100.3

const loggedIn = false
const outsidetemp = null
let userEmail; // automatocally will be undefined

const id = Symbol('345')
const id2 = Symbol('345')

// console.log(id === id2);

// const bigNumber = 3423425367556746536n

//array

const heroes = ["level", "range", "utiveil"]
let myobj = {
    name : "fahim",
    age : 23,
}

const myFunction = function(){
    console.log("Hello world");
}
// myFunction()
console.log(typeof myFunction);