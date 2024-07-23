/** Developed Bt Meta in 2013
 * React is JavaScript libaray
 * used for SPA (single page Application) to run the application in form of components
 * React allows us to create reusable UI components.
 */


/**
 * Topic is Module
 * Module are introduced in ES6 which make to use the code stored in different files
 * to use the code which stored in different file we use import and export
 * export is used to export the code through --->named and default
 * import -> use the code in the current through specified ---> {} for named
 * 
 */


/**
 * Module :in script tag(index.html) if the type="module" it have it own module environment
 * where this keyword is undefined as we know by default all the js file are run in local scope window(obj)
 * but in the case of module It will have strict mode.
 */


//for example into.js here we will return the code
//in test.js we will execute all the code of intro.js

/**
 * to export the code we need to use
 * a. Named (for this we can muliple)
 * b. default (always need to be one)
 * c. * Asterisk (includes all the code in the form of moduleobject)
 */
//the below name,f variable are named variables now go to the test.js

console.log(this);

export const name="srinija landa";
export const f=() =>{
    return "this is a function datatype"
}

//default 
const defaultExport = "defaultExportValue";
export default defaultExport;
