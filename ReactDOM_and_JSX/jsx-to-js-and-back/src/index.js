import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'

const getState = (hours) =>
  hours <= 12 ? 'morning' : hours >= 21 ? 'night' : 'afternoon'

const styling = (state) => {
  let style = {
    color: '#FFF7BA',
    backgroundColor: '#D2E6E5',
  }
  if (state === 'afternoon') {
    style.color = '#89A2CD'
    style.backgroundColor = '#053C9B'

  } else if (state === 'night') {
    style.color = '#5F6969'
    style.backgroundColor = '#0E0E0E'
  }
  return style
}
// if we want to use variables or better js in jsx, we just need to use "{}" and then use the variables or any js
const App = () => {
  const fName = 'lee'
  const lName = 'silva'
  const date = new Date()
  const hours = date.getHours()

  // in jsx style is not a string style="color: #FF8C00" -> wrong
  // but yes an object, {{color: "#FF8C00"}} -> correct
  return (
    <h1 style={ styling(getState(hours)) }>
      Good {getState(hours)} {`${fName} ${lName}`} it's {hours} o'clock
    </h1>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
