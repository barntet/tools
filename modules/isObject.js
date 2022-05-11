// Is a give variable an object?
export default function isObject(obj) {
  var type = typeof obj;
  return obj !== null && (type === "object" || type === "function");
}
