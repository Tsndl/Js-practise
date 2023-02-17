const ul = document.querySelector('.items');

//ul.remove()
//ul.lastElementChild.remove();
ul. firstElementChild.textContent = 'Kowalski';
ul.children[2].innerText = 'Tsndl';

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  console.log('click');
});


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
}
