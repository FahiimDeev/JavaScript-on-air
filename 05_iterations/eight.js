const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currentValue) {
//     console.log(`acc: ${acc} and currentValue: ${currentValue}`);
//     return acc + currentValue
// }, 0)

const myTotal = myNums.reduce( (acc, currentValue) => acc + currentValue, 0)

// console.log(myTotal);

// const myCart = [
//     {
//         courseName: "Literature",
//         price: 350
//     },
//     {
//         courseName: "Physics",
//         price: 450
//     }
// ]

// const total = myCart.reduce( (acc, course) => acc+ course.price,0)

// console.log(total);

const shoppingCart = [
    {
        itemName: "js Course",
        price: 299
    },
    {
        itemName: "python Course",
        price: 5999
    },
    {
        itemName: "Mobile Dev Course",
        price: 5999
    },
    {
        itemName: "Data Science",
        price: 12999
    },
]

const totalCost = shoppingCart.reduce ( (acc, course) => acc + course.price, 0)

console.log(totalCost);