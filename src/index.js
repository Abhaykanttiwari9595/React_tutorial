//! Lecture 6 =>

// import React from "react";
// import ReactDOM from 'react-dom'

// ReactDOM.render(<h1>Hello Abhay kant</h1>,
//   document.getElementById("root"));


//!  Lecture 7 => how to render multiple element in reactdom render

// import React from "react";
// import ReactDOM from 'react-dom';
// ReactDOM.render(
//   <div>
//     <h1>My name is Abhay kant tiwari</h1>
//     <h2>My father name is Vijay kant tiwari </h2>
//   </div>,
//   document.getElementById("root")
// );
//TODO ---------------or-----------------------
// import React from "react";
// import reactDom from "react-dom";
// reactDom.render(
//   [
//     <h1>My father name is Vijay kant tiwari</h1>,
//     <h2>My mother name is Nirmala tiwari</h2>
//   ],
//   document.getElementById("root")
//   );

//!  Lecture 8=>  Understand react fragment

// import React from "react";
// import react from "react";
// import reactDom from "react-dom";
// reactDom.render(
//   <React.Fragment>
//     <h1>My father name is Vijay kant tiwari</h1>
//     <h2>My mother name is Nir tiwari</h2>
//   </React.Fragment>,
//   document.getElementById("root")
// );

//TODO-------------or-----------------------
// import React from "react";
// import reactDom from "react-dom";
// reactDom.render(
//   <>
//     <h1>My father name is Vijay kant tiwari</h1>
//     <h2>My mother name is Ni tiwari</h2>
//   </>,
//   document.getElementById("root")
// );

//! Lecture 8 => jsx challenge

// import React from "react";
// import reactDom from "react-dom";
// reactDom.render(
//   <>
//     <h1>List of 5 web series</h1>
//     <ol>
//       <li>Money hiest</li>
//       <li>Sex Education</li>
//       <li>Abhay</li>
//       <li>kant</li>
//     </ol>
//   </>,
//   document.getElementById("root")
// );

// ! Lecture 10  Javascript Expression in Jsx in React Js

// import React from "react";
// import ReactDOM from "react-dom";

// const flname = "Abhay kant tiwari";

// ReactDOM.render(
// <>
//   <h1>My name is {flname}</h1>
//   <p>Sum of two number is {3+3}</p>
//   <p>my random number is {Math.random()}</p>
  
// </>
//   ,document.getElementById("root")
// );

//! Lecture 11 Template literal in JSX


// import React from "react";
// import ReactDOM from "react-dom";

// const flname = "Abhay kant";
// const lname ="tiwari";

// ReactDOM.render(
// <>
//   <h1>My name is {flname} {lname}</h1>

//   {/* or */}

//   <h1>My name is {flname+" "+lname}</h1>

//   {/* template literal */}

//   <h1>{`My name is ${flname} ${lname}`}</h1>
// </>
//   ,document.getElementById("root")
// );
