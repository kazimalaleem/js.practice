// Primitive

//7 types : string, Numeber, null, undefined, symblo, BigInt, 

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp =null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 23272636281706843237n

// Refrence (Non primitive)

//  Array, Objects, Functions, 

const heros = ["shakiman", "naagraj", "doga"]
let myObj = {
    name:"kazim",
    age: 19,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof bigNumber);

// ***************************************************************************

// Stack (primitive), Heap (Non-primitive)

let myYoutubename = "kazimohammed"

let anothername = mohammedkzim
anothername = "aleemohammed"

console.log(mohammedkzim);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTow = userOne

userTow.email = "kazim@gaminl.com"
console.log(userOne.email);
console.log(userTow.email);