'use strict';


const findBestEmployee = function(employees) {

    const maxKeys = Object.keys(employees);

    let maxValues = Object.values(employees);
    maxValues = Math.max(...maxValues);

    for (const key of maxKeys) {

        if (employees[key] === maxValues) {
            return key;
        }
    }

};


console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // lorence

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // mango

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // lux