import { toString } from "./_setup.js";

// Internal function form creating a `toString-based` type tester
export default function tagTester(name) {
  var tag = "[object " + name + "]";
  return function (obj) {
    return toString.call(obj) === tag;
  };
}
