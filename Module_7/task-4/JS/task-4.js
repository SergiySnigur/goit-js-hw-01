const btnDecrRef = document.querySelector('button[data-action="decrement"]');
const btnInrcRef = document.querySelector('button[data-action="increment"]');
const valueRef = document.querySelector('#value');

btnInrcRef.addEventListener('click', increment);
btnDecrRef.addEventListener('click', decrement);


let counterValue = 0;

function increment() {
    counterValue += 1;
    valueRef.textContent = counterValue;
};

function decrement() {
    counterValue -= 1;
    valueRef.textContent = counterValue;
};