"use strict";
// let greet: Function;
// example 1
let greet; // "a" and "b" can be changed
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// greet = (name: string, greeting: number) => {
//     console.log(`${name} says ${greeting}`);
// }
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
    // it must return a number, so we have to add "else"
};
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
