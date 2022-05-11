import isBoolean from "../modules/isBoolean.js";

console.log(isBoolean(""), 1); // false
console.log(isBoolean(true)); // true
console.log(isBoolean({})); // false
console.log(isBoolean([])); // false
console.log(isBoolean(1)); // false

var boolean = new Boolean(true);

console.log(isBoolean(boolean));
console.log(Object.prototype.toString.call(boolean));
