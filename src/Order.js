import React from 'react'
import history from './Form'

export default function Order(props){
    const {name, size, olive, pep, mushroom, pine, troll, ins} = props.user
    return(
        <div>
            <h3>{name}</h3>
            <p>Size: {size}</p>
            <p>Your Toppings</p>
            {olive && <p>Olive</p>}
            {pep && <p>Pepperoni</p>}
            {mushroom && <p>Mushroom</p>}
            {pine && <p>Pineapple</p>}
            {troll && <p>Lol Someone Lost Pineapple</p>}
            <p>{ins}</p>
            <button onClic={() => history.push('/')}>Home</button>
        </div>
    )
}