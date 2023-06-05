import React, { useState, useEffect } from 'react'
import { Logo, FormRow } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false,
}


function Register() {
  const [values, setValues] = useState(initialState);
  
  const handleChange = (event) => {
    console.log(event.target);
  }
  
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
  }


  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3>Login</h3>
        {/* name input */}
        <FormRow 
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
        />
        {/* email input */}
        <FormRow 
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password input */}
        <FormRow 
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' className='btn btn-block'>Submit</button>
      </form>
    </Wrapper>
  )
}

export default Register