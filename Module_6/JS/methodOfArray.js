'use strict';

import users from './users.js'

// TASK-1~~~
const getUserNames = users => users.map(user => user.name);

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]


// TASK-2~~~
const getUsersWithEyeColor = (users, color) => users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]


// TASK-3~~~
const getUsersWithGender = (users, gender) => {

    const personGenderFiltered = users.filter(user => user.gender === gender).map(user => user.name);
    return personGenderFiltered;

};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]


// TASK-4~~~
const getInactiveUsers = users => users.filter(user => !user.isActive);

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]


// TASK-5~~~
const getUserWithEmail = (users, email) => users.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}


// TASK-6~~~
const getUsersWithAge = (users, min, max) => {

    const userAge = users.filter(user => user.age >= min && user.age <= max);
    return userAge;

};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]


// TASK-7~~~
const calculateTotalBalance = users => users.reduce((acc, user) => acc + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916


// TASK-8~~~
const getUsersWithFriend = (users, friendName) =>
    users.filter(user => user.friends.some(friend => friend === friendName)).map(user => user.name);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


// TASK-9~~~
const getNamesSortedByFriendsCount = users =>
    users.sort((a, b) => a.friends.length - b.friends.length).map(user => user.name);

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]


// TASK-10~~~
const getSortedUniqueSkills = (users) => {

    const methodReduce = users.reduce((user, able) => {

        user.push(...able.skills);
        return user;

    }, []).sort((a, b) => {return a.localeCompare(b);}).filter((element, index, array) => { return array.indexOf(element) === index;});
        
    return methodReduce;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
