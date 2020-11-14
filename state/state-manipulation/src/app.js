import React from 'react'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
    }
    this.handle = this.handle.bind(this)
  }

  // event
  // note: you must not modify directly the **state value**
  // instated you can use setState from the Component. so something like this:
  handle = () => {
    // this.setState({ count: 1 }) -> this will give error
    // you will have to bind your method. this can be done
    // by putting this in the constructor, `this.handle = this.handle.bind(this)`
    // binding will make sure that the `handle` method is bind to the context of this

    // passing one simple object is good if you
    // don't need or care about the previous content in the state
    // this.setState({ count: 1 })

    // if we need or care about the previous state we must do:
    // use the previous version of state
    // then create the new version of state by adding just one to the previous value of state
    // do not do ++, if you do this you will have the same problem as above
    this.setState((previousState) => {
      return { count: previousState.count + 1 }
    })
  }

  // note: every time that the state changes a component that as the state value being passed
  // will be rendered again
  render() {
    return (
      <div className="counter">
        <h1>{this.state.count} </h1>
        <button onClick={this.handle}>add one!</button>
      </div>
    )
  }
}

export default App
