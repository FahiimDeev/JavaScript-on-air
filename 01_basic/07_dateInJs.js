// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// const myCreatedDate = new Date(2023, 0, 23)
// const myCreatedDate = new Date(2023, 0, 23, 5, 3);

let myCreatedDate = new Date ("2023-01-13")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getMonth());
console.log(newDate.getDay());

// console.log(`${newDate.getDay()} is the todays date`);

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    // timeZone: ""
}));