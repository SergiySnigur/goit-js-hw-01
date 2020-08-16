'use strict';


class Storage {

    constructor(items) {
        this.items = items;
    }

    // повертає початковий масив
    getItems() {
        return this.items;
    }

    // отримує новий товар и додає цей товар до нинішнього
    addItem(item) {
        this.items.push(item);
    }

    // отримуэ товар, якщо цей товар присутній, то видаляти його
    removeItem(item) {
        this.items = this.items.filter(rem => rem !== item);
    }
}


const storage = new Storage([
    'Нанитоиды',
    'Пролонгер',
    'Железные жупи',
    'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]