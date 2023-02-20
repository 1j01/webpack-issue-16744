// Either import or require fails
import * as library from "../library/dist/library-bundle.esm.js";
// const library = require("../library/dist/library-bundle.esm.js");

console.log("library:", library);
console.log("library.foo:", library.foo);
