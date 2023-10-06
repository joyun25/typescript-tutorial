let greet: Function;

greet = () => {
    console.log("hello");
}

const add1 = (a: number, b: number, c?: number | string) => {
    console.log(a + b);
    console.log(c);
}

const add2 = (a: number, b: number, c: number | string = 10) => {
    console.log(a + b);
    console.log(c);
    // if a function doesn't return anythings, the default type is "void"
}

add1(5, 10);
add2(5, 10, "20");

const minus = (a: number, b: number) => {
    return a + b;
}

let result = minus(10, 7);
// result = "something else";

