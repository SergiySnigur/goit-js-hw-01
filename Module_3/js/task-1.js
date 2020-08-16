'use strict';

const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
};

user['mod'] = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const obljectKeys = Object.keys(user);

for (const obj of obljectKeys) {
    console.log(`${obj}: ${user[obj]}`);
}