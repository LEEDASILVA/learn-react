import React from 'react'
const data = require('./jokes.json')

const Joke = (props) => (
  <div className="joke">
    <h3 style={{ display: !props.question && 'none' }}>
      Question: {props.question}
    </h3>
    <h3 style={{ color: !props.question && '#3F70C4' }}>
      PunchLine: {props.punchLine}
    </h3>
    <hr />
  </div>
)

// prop named key is for something unique
// this json is just to simulate the usage of
// an API or REST ...
const App = () => {
  let all = data.map((joke) => (
    <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine} />
  ))
  return <div className="app">{all}</div>
}

export default App
