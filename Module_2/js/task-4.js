'use strict';

const formatString = function(string, limit) {

    if (string.length < limit) {
        return string;
    }

    if (string.length > limit) {

        string = string.slice(0, 39);
        string = string + "...";
        return string;
    }

};

console.log(formatString('Curabitur ligula sapien, tincidunt non.',
    40));
// вернется оригинальная строка

console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.',
    40));
// вернется форматированная строка

console.log(formatString('Curabitur ligula sapien.',
    40));
// вернется оригинальная строка

console.log(
    formatString(
        'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.', 40
    ),
);
// вернется форматированная строка