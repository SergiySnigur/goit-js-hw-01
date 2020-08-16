'use strict';

let userInput = prompt("Введите страну доставки!");
let result;


switch (userInput.toLowerCase()) {

    case 'китай':
        result = '100';
        alert(`Доставка в ${userInput} будет стоить ${result}`);
        break;

    case 'чили':
        result = '250';
        alert(`Доставка в ${userInput} будет стоить ${result}`);
        break;

    case 'австралия':
        result = '170';
        alert(`Доставка в ${userInput} будет стоить ${result}`);
        break;

    case 'индия':
        result = '80';
        alert(`Доставка в ${userInput} будет стоить ${result}`);
        break;

    case 'ямайка':
        result = '120';
        alert(`Доставка в ${userInput} будет стоить ${result}`);
        break;

    default:
        alert("В вашей стране доставка не доступна");
}