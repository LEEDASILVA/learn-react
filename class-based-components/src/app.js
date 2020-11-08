import React, { Component } from 'react'

// using function components
// const App = () => (
//     <div>
//         <h1>Code goes here</h1>
//     </div>
// )
class App extends React.Component {
  render() {
    // important: everything that you want to do that involves display logic
    // you must to it here
    // for example styling or something that needs render

    // also important: **props** when ever you want to use props
    // you must use the "this syntax" -> this.props.something
    return (
      <div>
        <Header username="someone" />
        <Greeting />
      </div>
    )
  }
}

// normally each class or components have their own class
class Header extends React.Component {
  render() {
    return (
      <header>
        <p>Welcome, {this.props.username}</p>
      </header>
    )
  }
}

class Greeting extends Component {
  getState = (hours) =>
    hours <= 12 ? 'morning' : hours >= 21 ? 'night' : 'afternoon'
  // // methods
  // yourMethodHere() {
  //     // here you can create your own methods for the display logic
  // }
  // render is needed here and it will return what the function component returns

  render() {
    // const style = this.yourMethodHere()
    const date = new Date()
    const hours = date.getHours()

    return <h1>Good {this.getState(hours)} to you, sir or madam!</h1>
  }
}

export default App
