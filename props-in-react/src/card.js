import React from 'react'

const Card = (props) => (
    <div className= "card">
        <img src={props.content.imgUrl}></img>
        <h3>{props.content.name}</h3>
        <p>something: {props.content.something}</p>
    </div>
)

export default Card