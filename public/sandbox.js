"use strict";
let greet;
greet = () => {
    console.log("hello");
};
const add1 = (a, b, c) => {
    console.log(a + b);
    console.log(c);
};
const add2 = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
    // if a function doesn't return anythings, the default type is "void"
};
add1(5, 10);
add2(5, 10, "20");
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
// result = "something else";
