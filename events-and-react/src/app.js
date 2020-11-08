import React from 'react'

// in react is simple, the change is that we use it like js
// <button onClick="aFunctions()">bla bla bla</button>
// <button onMouseOver="aFunctions()">bla bla bla</button>
// ...
// uses the same conventions as js
// list of events that you can use in react ;
// https://reactjs.org/docs/events.html#supported-events
class App extends React.Component {
  render() {
    return (
      <div>
        <img
          onMouseOver={() => console.log('geek!! haha')}
          src="https://ih1.redbubble.net/image.460128523.5007/flat,750x,075,f-pad,750x1000,f8f8f8.u3.jpg"
        />
        <br />
        <br />
        <button
          onClick={() => console.log('you clicked on the button, iupiiiiii!')}
        >
          Click Here!
        </button>
      </div>
    )
  }
}

export default App
