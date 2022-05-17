// Create quick reference variables for speed access to core prototypes
export var toString = Object.prototype.toString;
export var hasOwnProperty = Object.prototype.hasOwnProperty;

// All **ECMAScript 5** native function implemetations that we hope to use ar delared here
export var nativeIsArray = Array.isArray;
export var nativeKey = Object.keys;
export var nativeCreate = Object.create;

// Create references to these  builtin functions because we override them.
export var _isNaN = isNaN;
export var  _isFinite = isFinite;