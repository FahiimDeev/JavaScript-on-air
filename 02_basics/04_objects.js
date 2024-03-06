// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    name: "some@gmail.com",
    fullname: {
        userFullName:{
            firstName: "Mustafa",
            lastName: "Fahim",
        }
    }
}
// console.log(regularUser.fullname.userFullName.lastName);

const obj1 = {
    1: "a",
    2: "b"
}
const obj2 ={
    3: "a",
    4: "b"
}
const obj4 = {
    5: "a",
    6: "b"
}

// for merging, we'll have to use assign function
// const obj3 = Object.assign({}, obj1,obj2,obj4) //empty bracket is the target to keep the all the object in that

const obj3 = {...obj1, ...obj2} //spread

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "awr@gmail.com"
    },
    {

    },
    {

    },
    {

    },
]

users[1].email
console.log(tinderUser); 

console.log(Object.keys(tinderUser)); 
console.log(Object.values(tinderUser)); 
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLogged'));

