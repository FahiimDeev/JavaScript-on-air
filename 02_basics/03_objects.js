//singleton
//Object.create

// Object literals

const mySym = Symbol("key1")
 
const jsObjects = {
    name: "fahim",
    "full name": "Mustafa Fahim",
    age: 34,
    [mySym] : "MyKey1",
    location: "Rangpur",
    email: "mustafafhm986@gmail.com",
    isloggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(jsObjects.email);
// console.log(jsObjects["email"]);
// console.log(jsObjects["full name"]);
// console.log(jsObjects[mySym]); 

jsObjects.email = "bb@gmail.com"
// console.log(jsObjects.email);
// Object.freeze(jsObjects) 
// console.log(jsObjects);

jsObjects.greetings = function(){
    console.log("Hello js fellows");
}

jsObjects.greetingsTwo = function(){
    console.log(`Hello ${this["full name"]}, welcome again`);
}

console.log(jsObjects.greetings());
console.log(jsObjects.greetingsTwo());