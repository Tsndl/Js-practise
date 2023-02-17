const ul = document.querySelector('.items');

//ul.remove()
//ul.lastElementChild.remove();
ul. firstElementChild.textContent = 'Kowalski';
ul.children[2].innerText = 'Tsndl';

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e) => {
  console.log('click');
});
