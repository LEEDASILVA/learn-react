import React from 'react'
import ReactDOM from 'react-dom'


// functional components, meaning reusable components
const MyApp = () => 
  (
  <div><ul>
    <li>a</li>
    <li>b</li>
    <li>c</li>
    <li>d</li>
  </ul></div>
  )

ReactDOM.render(<MyApp/>, document.getElementById('root'))