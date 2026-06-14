// Primitive

// 7 types : String, Number, Boolean ,Null, Undefined , undefined, Symbol,bigint

const score =100
const scoreValue =100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 1234567890123456789012345678901234567890n


// reference (Non primitive)

//Array, Oject, Functions

const heros = ["shaktiman","naagraj","doga"]

let myObj = {
    name:"suraj",
    age: 23,
}

const myFunction = function(){
    console.log("hello world");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myFunction);
console.log(typeof heros);