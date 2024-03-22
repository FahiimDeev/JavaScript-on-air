// for of

const arr = [1,2,3,4,5]

// const obj = {
//     userName: "Mustafa",
//     id: 342423,
//     isLoggedIn: true
// }

for (const num of arr)  {
    // console.log(num);
}

const greetings = "Hello world"

for (const message of greetings){
    // if (message === " "){
    //     break
    // }else{
    //     console.log(`Each character is ${message}`);
    // }
    // console.log(`Each character is ${message}`);
}

// Maps

const map = new Map()
map.set('BD', "Bangladesh")
map.set('FR', "France")
map.set('POR', "Portugal")
map.set('FR', "France")

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, value);
}

const myObj = {
    Game1: 'NFS',
    Game2: 'Spiderman',
}

for (const games of myObj) {
    console.log(games);
}