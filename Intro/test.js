/**
 * in test.js we will import the code of intro.js
 * ALERT alway the imports need to be TOP.
 * syntax for named exports --> import {varName as a} from './intro';
 * import -->keyword 
 * for Named export we need to deconstruct using {} within that passing variable for muliple we can separat by commas
 * as --> used as alias name just replaced of the variable
 * from -->keyword
 * path --> "path of the js file"
 */

/**
 * for default export as it will only one we can give any name
 */
import anyname, { name as n, f } from './intro.js';
import *  as allExports from './intro.js'; //this will take all the code of intro.js

console.log("the default one", anyname); 
console.log(n);
console.log(f);                      

console.log(f());  


console.log(allExports) //form of object
console.log(allExports.name);
console.log(allExports.f());
console.log(allExports.default)
