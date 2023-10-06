// const anchor = document.querySelector('a')!;
// Solution 2: add a "!" in the end tells typescript it is definitely not "null", please don't jump error

// Problem: typescript would jump error because it thinks it is "null"
// console.log(anchor.href);

// Solution 1:
// if(anchor){
//     console.log(anchor.href);
// }

// ---

// const form = document.querySelector('form')!;
// typescript recognize "form" as a "HTMLFormElement" (hover the code and see)

// const form = document.querySelector('.new-item-form')!;
// typescript recognize "form" as a "Element" (hover the code and see), because select by "class" can have more possibility

const form = document.querySelector('.new-item-form') as HTMLFormElement;
// typescript recognize "form" as a "HTMLFormElement" (hover the code and see)
// so you can have many options when coding "console.log(form.)" in vscode, you can see many usable methods while coding it

// const type = document.querySelector('#type');
// typescript recognize "type" as a "Element | null"

const type = document.querySelector('#type') as HTMLSelectElement;
// typescript recognize "type" as a "HTMLSelectElement"

const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// typescript recognize "type" as a "HTMLInputElement"

const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
    e.preventDefault();

    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber // default type is "string"
    );
})