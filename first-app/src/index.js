import React from "react"
import ReactDOM from "react-dom"

// first argument is what do i want to render
// second argument is where do i want to render it
// the second argument -> needs to be the div with the id=root
// because thats where react is going to render the content to...
ReactDOM.render(<h1>Hello world!!!</h1>, document.getElementById("root"))
// JSX looks similar to HTML thats way it does not give error

// you can't have two jsx elements in the first argument, example
/*
 !!ERROR!!
ReactDOM.render(<h1>Hello world!!!</h1><p>this is a p tag</p>, document.getElementById("root"))
 !!ERROR!!
*/

// but you can have one element with multiple elements inside, for example:

// !!OK!!
// ReactDOM.render(<div><h1>Hello world!!!</h1><p>this is a p tag</p></div>, document.getElementById("root"))
// !!OK!!

