import React from 'react'
import Order from './Order'


export default function OrderList (props){
    return(
        <div>
            <h3>Order Details</h3>
            {props.order.map(order  => 
                <Order order={order} key={order.id}/>
            )}
        </div>
    )
}