import React, {useState, useEffect} from "react";
import {Switch, Route, useHistory} from 'react-router-dom'
import Form from './Form'
import OrderList from './OrderList'
import axios from 'axios'
import * as Yup from 'yup'

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

const formSchema = Yup.object().shape({
  name: Yup
    .string()
    .min(2, "Must be 2 characters long")
    .required("Must be 2 characters long"),
});

const App = () => {

  const [disable, setDisable] = useState(true)
  const [order, setOrder] = useState([])
  const [errors, setErrors] = useState(initialForm)
  const [form, setForm] = useState(initialForm)

  const history = useHistory()

  useEffect(() => {
    formSchema.isValid(form).then((valid) =>{ 
      setDisable(!valid)})
  }, [form])



  const validForm = (e) => {
    Yup
    .reach(formSchema, 'name')
    .validate(e.target.value)
    .then(() => {
      setErrors({...errors, [e.target.name]: ''})
    })
    .catch(err => setErrors({...errors, [e.target.name]: err.errors}))
  }

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

  const handleChange = (e) => {
    e.persist()
    e.target.type === 'checkbox' ? 
    setForm({...form, [e.target.name]: e.target.checked})
    : setForm({...form, [e.target.name]: e.target.value})
    validForm(e)
  }

  return (
    <>
      <h1>Lambda Eats</h1>
        {errors.name.length > 0 && <p>{errors.name}</p>}

      <Switch>

        <Route path='/pizza'>
          <OrderList order={order}/>
        </Route>

        <Route path='/'>
          <Form form={form} handleChange={handleChange} handleSubmit={handleSubmit} disable={disable}  errors={errors}/>
        </Route>

      </Switch>
    </>
  );
};
export default App;
