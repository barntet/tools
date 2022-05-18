import has from "../modules/_has.js";

// console.log(global);
console.log(has("setTimeout", global));

var obj = { n: null, u: undefined };
console.log(has(obj, "n")); // value 是null也会返回true
console.log(has(obj, "u")); // value 是undefined返回true
