/**
 * May class
 * revision of the previous class like
 * react.createElement,recactDom.createRoot(),app.render(reactelements)
 * JSX concept
 */
/**
 * what is JSX->
 * jsx synatx:
 */
import React from 'react';
import ReactDOM from 'react-dom/client';


const reactElement=(<div id="con" className="abc xym nmo">Just inner text</div>); //xml
const root =ReactDOM.createRoot(document.getElementById('root'));
root.render(reactElement);