'use strict';

const numbers = [];
let total = 0;

while (true) {

    let input = prompt("Введите пожалуйста число!");

    if (input === null) {
        break;
    }

    input = Number(input);

    if (Number.isNaN(Number(input))) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }

    numbers.push(input);

}

for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
}

console.log(`Общая сумма равна ${total}`);