const categorRef = document.querySelectorAll('.item');
console.log(`List contains ${categorRef.length} categories`);

const countCategories = [...categorRef].map(elements => {

console.log(`Категория: ${elements.children[0].textContent}`);
console.log(`Количество элементов: ${elements.children[1].children.length}`);

});

