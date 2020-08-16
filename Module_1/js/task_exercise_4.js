'use strict';

const credits = 23580;
const prisePerDroid = 3000;
let userInput = prompt('Какое количество дроидов Вы хотите купить?');

if (userInput === null) {
    console.log("Отменено пользователем!");
} else if (userInput * prisePerDroid <= credits) {
    userInput = Number(userInput);
    const totalPrice = prisePerDroid * userInput;
    alert(`Вы купили ${userInput} дроидов, на счету осталось ${credits - totalPrice}`);
} else {
    alert('Недостаточно средств на счету!');
}