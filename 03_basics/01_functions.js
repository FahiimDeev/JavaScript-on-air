function sayMyName(){
    console.log("M");
    console.log("u");
    console.log("s");
    console.log("t");
    console.log("a");
    console.log("f");
    console.log("a");
}

// sayMyName() 

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // console.log("Mustafa")
    // return result
    return number1 + number2
}

const result = addTwoNumbers(4, 6)
// console.log("Result: ", result);


function logInUserMessage(username = "Mustafa"){
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just slide in!`
}

// console.log(logInUserMessage("fahim"));

function calculateCartPrice(val1, val2, ...number1){
    return number1
}

console.log(calculateCartPrice(590, 659, 450, 34534,546));

const user = {
    username: "Mustafa",
    price: 190 
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}

// handleObject(user)
handleObject({
    username: "Fahim",
    price:500
})

const myNewArray = [100, 200, 300, 400]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([999,888,777,666]));

//another self practice

const greatMeat = ["Chicken", "Mutton", "Beef"]

function whichTastesBetter(meat){
    return meat[2]
}

// console.log(whichTastesBetter(greatMeat));
console.log(whichTastesBetter(["burger", "nachos", "pizza"]));
