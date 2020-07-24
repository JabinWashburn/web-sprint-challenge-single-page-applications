import React, {useState} from "react";
import {Switch, Route, useHistory} from 'react-router-dom'
import Form from './Form'
import OrderList from './OrderList'
import axios from 'axios'

const initialForm ={
  name: '',
  size: '',
  olive: false, 
  pep: false,
  mushroom: false,
  pine: false,
  troll: false,
  ins: '' 
}

const App = () => {

  const [order, setOrder] = useState([])

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    axios
    .post('https://reqres.in/api/users', form)
    .then((res) => {
      console.log(res)
      setOrder([...order, res.data])
      history.push('/pizza')
    })
    .catch((err) => console.log(err))
  }

  const [form, setForm] = useState(initialForm)

  


  const handleChange = (e) => {
    e.persist()
    e.target.type === 'checkbox' ? 
    setForm({...form, [e.target.name]: e.target.checked})
    : setForm({...form, [e.target.name]: e.target.value})
  }

  return (
    <>
      <h1>Lambda Eats</h1>

      <Switch>

        <Route path='/pizza'>
          <OrderList order={order}/>
        </Route>

        <Route path='/'>
          <Form form={form} handleChange={handleChange} handleSubmit={handleSubmit} />
        </Route>

      </Switch>
    </>
  );
};
export default App;
