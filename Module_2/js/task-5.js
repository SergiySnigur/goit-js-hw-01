'use strict';

const checkForSpam = function(message) {

    let messageSplit = message.toLowerCase().split(' ');

    if (messageSplit.includes('sale') || messageSplit.includes('[spam]')) {
        return true;
    } else {
        return false;
    }

};

console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// Еще для проверки co [sPAM]
console.log(checkForSpam('[sPAM] How to earn fast money?')); // true