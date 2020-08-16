const inputRef = document.querySelector('#validation-input');
let inputDataLength = inputRef.getAttribute('data-length');
inputDataLength = Number(inputDataLength);

inputRef.addEventListener('blur', dataLength);

function dataLength(event) {

    if (event.target.value.length === inputDataLength) {

        event.target.classList.remove('invalid');
        event.target.classList.add('valid');

    } else {
        event.target.classList.remove('valid');
        event.target.classList.add('invalid');

    }

};

