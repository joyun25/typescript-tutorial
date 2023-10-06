var age = 25;
age = true;
console.log(age); // true
age = 'hello';
console.log(age); // 'hello'
age = { name: 'luigi' };
console.log(age); // { name: 'luigi' }
var mixed = [];
mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed); // [5, 'mario, false]
var ninja;
ninja = { name: 'yoshi', age: 25 };
console.log(ninja); // { name: 'yoshi', age: 25 }
ninja = { name: 25, age: 'yoshi' };
console.log(ninja); // { name: 25, age: 'yoshi' }
