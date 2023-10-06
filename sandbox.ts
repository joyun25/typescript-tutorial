// explicit types
let character: string;
let age : number;
let isLoggedIn: boolean;

// age = 'luigi';
age = 30;

// isLoggedIn = 25;
isLoggedIn = true;

// arrays
let ninjas: string[] = [];

// nunjas = [10, 23];
ninjas = ['yoshi', 'mario'];
ninjas.push('shaun');

// union types
let mixed: (string | number)[] = [];
mixed.push('hello');
mixed.push(20);
// mixed.push(false);

let uid: string | number;
uid = '123456';
uid = 123456;

// objects
let ninjaOne: object;
ninjaOne = { name: 'yoshi', age: 30};
ninjaOne = [];

let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string
};

ninjaTwo = {
  name: 'mario',
  age: 20,
  beltColour: 'black',
  // skills: []
}