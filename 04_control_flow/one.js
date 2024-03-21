// if statement

const isUserLoggedIn = true
const temparature = 41

if (temparature === 41){
    // console.log("less than 50");
} else {
    // console.log("Temparature didn't made the decesion");
}

// <, >, <=, >=, ==, !=, ===, !==

const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power ${power}`);
// }

// console.log(`User power ${power}`);


const balance = 1000

// if (balance > 500) console.log("test"); //implicit scope

// if (balance < 500) {
//     console.log("Less than 500");
// } else if (balance < 750){
//     console.log("Less than 750");
// } else if (balance < 900){
//     console.log("Less than 900");
// } else{
//     console.log("Less than 1200");
// }


const userLoggedIn = true
const debitCard = true
const LoggedInFromGoogle = false
const LoggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("User can shopping");
}

if (LoggedInFromGoogle || LoggedInFromEmail){
    console.log("User LoggedIn");
}