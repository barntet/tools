import { nativeIsArray } from "./_setup.js";
import tagTester from "./_tagTester.js";

// Is a give value an array
// Delegates tp ECMA5's native `Array.isArray`
export default nativeIsArray || tagTester("Array");
