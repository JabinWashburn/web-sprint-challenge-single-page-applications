import React from 'react'
import {useHistory} from 'react-router-dom'

function Form (props){
    const history = useHistory()

    console.log(props)

    const {form, handleChange, handleSubmit } = props

    return(
        <form onSubmit={handleSubmit}>
            
            <h3>Name:</h3>
            <input name='name' value={form.name} onChange={handleChange}></input>

            <h2>Please Customize Your Pizza</h2>

            <h3>Size:</h3>
            <select name='size' value={form.size} onChange={handleChange}>
                <option disabled value=''>
                    Select Size
                </option>
                <option value='smol'>Smol</option>
                <option value='medium'>Medium</option>
                <option value='large'>Large</option>
            </select>
            <h3>Toppiings:</h3>
            <label>
                <p>Black Olive</p>
                <input name='olive' type='checkbox' checked={form.olive} onChange={handleChange}></input>

                <p>Pepperoni</p>
                <input name='pep' type='checkbox' checked={form.pep} onChange={handleChange}></input>
                
                <p>Mushroom</p>
                <input name='mushroom' type='checkbox' checked={form.mushroom} onChange={handleChange}></input>

                <p>Pineapple</p>
                <input name='pine' type='checkbox' checked={form.pine} onChange={handleChange}></input>
                
                
                <p>Remove Pine Apple From Someone Elses' Pizza</p>
                <input name='troll' type='checkbox' checked={form.troll} onChange={handleChange}></input>
                
            </label>

            <h3>Special Instructions</h3>
            <input name='ins' value={form.ins} onChange={handleChange}></input>

            <br></br>
            
            <button form={form} type='submit' onClick={() => history.push('/pizza')}>Order Zaa!</button>

        </form>
    )
}
 
export default Form