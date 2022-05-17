import isNumber from '../modules/isNUmber.js';

console.log(isNumber(1));
console.log(isNumber(''));
console.log(isNumber(true));
console.log(isNumber({}));
console.log(isNumber([]));
console.log(isNumber(null));
console.log(isNumber(undefined));