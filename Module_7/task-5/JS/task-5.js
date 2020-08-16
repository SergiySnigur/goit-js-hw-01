const inputNameRef = document.querySelector('#name-input');
const outputNameRef = document.querySelector('#name-output');

inputNameRef.addEventListener('input', inputValue);

function inputValue(event) {

    if (event.target.value === '') {
        outputNameRef.textContent = "незнакомец";
    } else {
        outputNameRef.textContent = event.target.value;
    }

};