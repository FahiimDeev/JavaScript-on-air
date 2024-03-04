const score = 400
// console.log(score);

const balance = new Number (100) // this will be defined number automatically
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 23.787998420
// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString());


// +++++++++++++++++++++++++maths++++++++++++++++++++++++++++


// console.log(Math);
// console.log(Math.abs(-5));
// console.log(Math.round(5.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.max(7,8,3,9));
// console.log(Math.min(7,8,3,9));

console.log(Math.random());
console.log(Math.random()*10);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);