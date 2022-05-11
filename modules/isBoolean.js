import { toString } from "./_setup.js";

// Is a given value a boolean?
export default function isBoolean(value) {
  //   console.log(toString.call(value) === "[object Boolean]");
  return (
    value === true ||
    value === false ||
    toString.call(value) === "[object Boolean]"
  );
}
