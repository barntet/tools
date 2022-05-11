import isObject from "../modules/isObject.js";

console.log(isObject({}));

console.log(typeof [])

console.log(isObject(function a(){})) // 函数也是一个对象