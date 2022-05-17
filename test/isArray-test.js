import isArray from '../modules/isArray.js';

console.log(isArray([]));
console.log(isArray({}));
console.log(isArray(null));
console.log(isArray(undefined));
console.log(isArray(false));
console.log(isArray('1'));
console.log(isArray(1));
console.log(isArray(new Array([])));

console.log(Object.prototype.toString('Error'))