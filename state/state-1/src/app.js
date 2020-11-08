import React from "react"

// state is a data that a component maintains (this meaning that it can change that value)
// state != from props : this meaning that props can't change (immutable) by trying to do it on a component
// while state can be changed in a component, example: `WRONG: props.something = "something"`

// state is a way that a component can change it's own data or maintain it
// state can only be used in a class based component
class App extends React.Component {
    // constructor is built in the js
    // it initializes parts of this class (values)
    // you can see more about classes [here](https://scrimba.com/p/p4Mrt9/cQnMDHD)
    constructor() {
        // goes to the parent class or super class and grabs and brings it so that our class can use them
        super()
        this.state = {
            name: "someone",
            age: 100
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <h3>{this.state.age}years</h3>
                {/* <ChildComponent answer={this.state.answer}/> */}
            </div>
        )
    }
}

export default App