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
// console.log(typeof myFunction);


//==+++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (non primitive)

let youtubeName = "Mustafa"

let anotherName = youtubeName
anotherName = "fahim"

// console.log(youtubeName);
// console.log(anotherName);

let userOne = {
    email : "something@gmail.com",
    id : 3543543435
}

let userTwo = userOne

userTwo.email = "mustafa@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

