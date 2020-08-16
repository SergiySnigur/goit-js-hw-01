'use strict';

const countProps = function(object) {

    let objectEntries = Object.entries(object);

    objectEntries = Number(objectEntries.length);

    return objectEntries;

};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500, a: 8, b: 10 })); // 5