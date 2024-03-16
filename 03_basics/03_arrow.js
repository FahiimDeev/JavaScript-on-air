const user = {
    username : "fahim",
    price: 999,
    welcomeMessage: function (){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sammy"
// user.welcomeMessage()

// console.log(this);

// function tea(){
//     let username = "fahim"
//     console.log(this.username);
// }
// tea()

// const tea = function (){
//     let username = "fahim"
//     console.log(this.username);
// }

const tea = () => {
    let username = "fahim"
    console.log(this);
}

// tea()

// const addTwo = (num1, num2) => {
//     return num1 * num2
// }

// const addTwo = (num1, num2) =>  num1 * num2
// const addTwo = (num1, num2) =>  (num1 * num2)

const addTwo = (num1, num2) =>  {username: "fahim"}

// console.log(addTwo(5,6));

const myArray = [2,3,7,4,8]

myArray.forEach(() => {})