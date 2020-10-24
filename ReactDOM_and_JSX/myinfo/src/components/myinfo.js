// all components must have the react import because it must
// find the jsx so it does not give error
import React from "react"

// components that will be render in the index.js
const MyInfo = () =>
  <div>
    <h1>Lee</h1>
    <p>
      Hey my name is Lee and i'm learning front-end so that i can become a <b>fullstack developer</b>
      <br></br>
      Right now i'm more into back-end and content.
    </p>
    <h2>Top langs:</h2>
    <ul>
      <li>Go</li>
      <li>JS</li>
      <li>Rust</li>
      <li>shell</li>
      <li>SQL</li>
      <li>graphQL</li>
      <li>C</li>
      <li>C++</li>
      <li>Java</li>
      <li>Assembly</li>
      <li>Android</li>
      <li>php</li>
    </ul>
  </div>

export default MyInfo