import _isNaN from '../modules/isNaN.js';

console.log(_isNaN('a'));
console.log(_isNaN(1));
console.log(_isNaN([]));
console.log(_isNaN({}));
console.log(_isNaN(null));
console.log(_isNaN(undefined));
console.log(_isNaN(true));

console.log(isNaN(0 / 0));
console.log(_isNaN('36,7'));
console.log()