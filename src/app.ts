import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplete.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter';

// Selecting the form
const form = document.querySelector('.new-item-form') as HTMLFormElement;

// Selecting the input field
const type = document.querySelector('#type') as HTMLInputElement;
const toForm = document.querySelector('#toForm') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// List template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [toForm.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === 'invoice') {
    doc = new Invoice(...values);
  } else {
    doc = new Payment(...values);
  }

  list.render(doc, type.value, 'end');
});
