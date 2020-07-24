import React from 'react'
import {useHistory} from 'react-router-dom'

export default function Order(props){
    const {name, size, olive, pep, mushroom, pine, troll, ins} = props.order

    const history = useHistory()

    return(
        <div>
            <h3>{name}</h3>
            <h4>Size: {size}</h4>
            <h4>Your Toppings</h4>
            {olive && <p>Olive</p>}
            {pep && <p>Pepperoni</p>}
            {mushroom && <p>Mushroom</p>}
            {pine && <p>Pineapple</p>}
            {troll && <p>Lol Someone Lost Pineapple</p>}
            <h4>Special Instructions</h4>
            <p>{ins}</p>
            <button onClick={() => history.push('/')}>Home</button>
        </div>
    )
}