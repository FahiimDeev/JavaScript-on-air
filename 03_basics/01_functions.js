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

console.log(logInUserMessage("fahim"));