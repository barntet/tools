import isError from '../modules/isError.js';

// console.log(isError(''))
// console.log(isError(1));
// console.log(isError(null));
// console.log(isError(undefined));
// console.log(isError([]));
// console.log(isError({}));
// console.log(isError(false));
const error = new Error('error');
console.log(error)
console.log(isError(error));
console.log(isError(Error('error')));