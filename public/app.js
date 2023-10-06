"use strict";
// classes
class Invoice {
    // readonly client: string; // "readonly" property means we can only read outside or inside the class itself 
    // private details: string; // "private" property means we can access it from outside
    // public amount: number; // default value is "public", we don't need to write it specifically
    // constructor(c: string, d: string, a: number){
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach(inv => {
    // inv.client = 'something else'; // error
    console.log(inv.client, inv.amount, inv.format());
    // however, we can access the "format" because it access "details" in the "class"
});
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber // default type is "string"
    );
});
