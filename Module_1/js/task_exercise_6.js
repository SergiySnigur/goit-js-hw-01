'use strict';

let total = 0;

while (true) {
    let input = prompt("Введите пожалуйста число!");

    if (input === null) {
        break;
    }

    input = Number(input);
    total += input;

    if (Number.isNaN(input)) {
        alert('Было введено не число, попробуйте еще раз');
        continue;
    }
}
console.log(`Общая сумма чисел равна ${total}`);