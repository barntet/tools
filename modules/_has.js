import { hasOwnProperty } from "./_setup.js";

// Internal function to check whether 'key' is an own property  name of 'obj'
export default function has(key, obj) {
  return obj !== null && hasOwnProperty.call(obj, key);
}
