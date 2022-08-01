import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplete.js';
import { Payment } from './classes/Payment.js';
// Selecting the form
const form = document.querySelector('.new-item-form');
// Selecting the input field
const type = document.querySelector('#type');
const toForm = document.querySelector('#toForm');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [toForm.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
