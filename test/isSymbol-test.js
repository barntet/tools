import isSymbol from "../modules/isSymbol.js";

console.log(isSymbol(1));
console.log(isSymbol("1"));
console.log(isSymbol(undefined));
console.log(isSymbol(null));
console.log(isSymbol(true));
console.log(isSymbol(false));
console.log(isSymbol({}));
console.log(isSymbol([]));
console.log(isSymbol(Symbol(1)));
