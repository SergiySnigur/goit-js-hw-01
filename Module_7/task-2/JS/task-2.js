const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const ingrRef = document.querySelector('#ingredients');

const ingrCreateElements = ingredients.map(elements => {

const ingrCreate = document.createElement('li');
ingrCreate.textContent = elements;

return ingrCreate;

});

ingrRef.append(...ingrCreateElements);
console.log(ingrRef);






