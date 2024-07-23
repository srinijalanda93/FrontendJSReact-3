import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import

//JSX concept
/**
 * 1.to embed data inside jsx we use {data}
 * 2.We can write the expression within {}
 * 3.boolean ,null,undefined cann't be display on the UI
 * 4.object within {} -->thrown an error
 * 5.for array internally i t will do the iteration even for nested arrays also
 * it is an instanceof Array
 * 6.JSX won't accept the class,object,but invokes the function returned values
 * 7.to pass multiple reactelement into render method we need to use <></>
 * 8. to pass multiple containers inside the render method (<>{con1}{con2}</>)
 */
// const emailid = "enter mail gril!";
// const ID = "mail";
// const placeHolder = "pls enter ur mail";
// const name = "srinija landa";
// const list=['c','java','sucess','money']
// let elements=list.map((e,index) => {return <li key={index}>{e}</li>}) //eventually we will get the error in console because of no key values
// //render the name in unordered list
// const reactElement = (
//   <div id="con" className="abc xym nmo">
//     {/* <label htmlFor={ID}>{emailid}</label>
//     <input placeholder={placeHolder} id={ID} /> */}
//     <b>{name}</b>
//     {/* <span>true</span> */}
//     {/* <b>{{name:'s', age:1}}</b> */}
//     {/* <b>{[12, 3, 4, 5, 7,'react']}</b> */}
//     {/* <p>some {<b>BOLD TEXT </b>}</p> */}
//     <ul>
//        {elements}
//     </ul>
//   </div>
// ); //xml

//EventListeners
//components =>Class component and functional component
//A functional component is a javascript function  which returns the jsx function
//A function component alway start with the capital letter <User/>
const onclickBtn = () => {
  alert("clciked on the button");
};
const EnterMouse = () => {
  console.log("its enter man!");
};
//onMouseLeave
// const reactElement = (
//   <>
//     <button onClick={onclickBtn} onMouseEnter={EnterMouse}>
//       Click me!
//     </button>
//   </>
// );
// const user = (name, age) => {
//   return (
//     <>
//       <p>{age}</p>
//       <p>{name}</p>
//     </>
//   );
// };

//Component =>functional component and class component
/**
 * ADVANTAGE OF COMPONENT -> CODE reusability
 */
//functional component =>A function which take JS and returns the JSX 
/**
 * declaration of function in js and returning JSX is different using 
 * Customized function like this <User key:object key :object/> 
 * alway User ->U need to lower so the react can easily distinguish 
 * and k:object are called the properties(props). 
 */

/**
 * Decaralation of function is easier but in the parameter we need pass the object with only keys ->deconstructor
 * 
 */
const User =({rollno,subject,score}) =>{
  return(<>
  <b>{rollno}</b>
  <p>{subject}</p>
  <b>{score}</b>
  </>)
}

const root = ReactDOM.createRoot(document.getElementById("root"));
//User({name:'srinija',age:22}) =><User name:"srinija",age:22/>
root.render(<User rollno="26" subject="react" score="9.2"/>); //calling the function like these
