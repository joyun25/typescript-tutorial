import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payment.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// ENUMS
var ResouceType;
(function (ResouceType) {
    ResouceType[ResouceType["BOOK"] = 0] = "BOOK";
    ResouceType[ResouceType["AUTHOR"] = 1] = "AUTHOR";
    ResouceType[ResouceType["FILM"] = 2] = "FILM";
    ResouceType[ResouceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResouceType[ResouceType["PERSON"] = 4] = "PERSON";
})(ResouceType || (ResouceType = {}));
const docOne = {
    uid: 1,
    resourceType: ResouceType.BOOK,
    data: { title: 'name of the wind' }
};
const docTwo = {
    uid: 10,
    resourceType: ResouceType.PERSON,
    data: { name: 'yoshi' }
};
console.log(docOne, docTwo);
