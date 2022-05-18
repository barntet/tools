import isArguments from "../modules/isArguments.js";

function test(value) {
  console.log(isArguments(value));
  console.log(isArguments(arguments));
  console.table(arguments);
}

test(1)