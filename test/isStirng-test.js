import isString from '../modules/isString.js';

console.log(isString(''));
console.log(isString(1));
console.log(isString(undefined));
console.log(isString(null));
console.log(isString([]));
console.log(isString({}));
console.log(isString(true));
console.log(isString(false));